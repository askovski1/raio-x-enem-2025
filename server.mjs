import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const privateKeys=JSON.parse(await readFile(path.join(root,'server-private','answer-keys.json'),'utf8'));
const questions=JSON.parse(await readFile(path.join(root,'questions.json'),'utf8'));
const stimuli=JSON.parse(await readFile(path.join(root,'stimuli.json'),'utf8'));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg'};
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data))}
const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(req.method==='GET'&&url.pathname==='/health')return json(res,200,{status:'ok'});
  if(req.method==='GET'&&url.pathname==='/api/questions')return json(res,200,{questions,stimuli});
  if(req.method==='POST'&&url.pathname==='/api/answer'){
    let body='';for await(const chunk of req){body+=chunk;if(body.length>2048)return json(res,413,{error:'Solicitação muito grande.'})}
    try{const input=JSON.parse(body);const day=Number(input.day),number=Number(input.number),answer=String(input.answer||'').toUpperCase(),language=input.language==='es'?'es':'en';if(![1,2].includes(day)||!Number.isInteger(number)||number<(day===1?1:91)||number>(day===1?90:180)||!['A','B','C','D','E'].includes(answer))return json(res,400,{error:'Resposta inválida.'});const record=privateKeys[`D${day}`]?.answers?.[number];if(!record)return json(res,404,{error:'Gabarito não encontrado para esta questão.'});const correctAnswer=typeof record==='string'?record:record.idiomas?.[language];if(!correctAnswer)return json(res,404,{error:'Gabarito do idioma não encontrado.'});return json(res,200,{correct:correctAnswer==='Anulado'||answer===correctAnswer,correctAnswer,annulled:correctAnswer==='Anulado'})}catch{return json(res,400,{error:'Não foi possível interpretar a resposta.'})}
  }
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);return res.end('Method not allowed')}
  let pathname=decodeURIComponent(url.pathname);if(pathname==='/')pathname='/index.html';if(pathname.startsWith('/server-private/')){res.writeHead(404);return res.end('Not found')}const file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}
  try{const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});return req.method==='HEAD'?res.end():res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found')}
});
const port=Number(process.env.PORT)||4173;const host=process.env.HOST||'0.0.0.0';server.listen(port,host,()=>console.log(`ENEM 2025 disponível na porta ${port}`));

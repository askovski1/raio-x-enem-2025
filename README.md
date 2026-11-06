# Simulado ENEM 2025

## Publicar na web

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https%3A%2F%2Fgithub.com%2Faskovski1%2Fraio-x-enem-2025)

Clique no botão, conecte sua conta GitHub ao Render e aprove a criação do serviço. O Render compila e inicia o servidor Node; ao concluir, use a URL `onrender.com` exibida no painel. O arquivo `render.yaml` configura o serviço e sua verificação de saúde. Para evitar implantações sem sua aprovação em cada conta que usar o botão, as novas versões devem ser implantadas pelo painel do Render.

O GitHub Pages sozinho não executa o endpoint `/api/answer`, necessário para carregar e corrigir as questões.

## Executar

Com Node.js 20 ou superior, abra um terminal nesta pasta e execute:

```sh
npm start
```

Depois acesse `http://127.0.0.1:4173`. Também é possível iniciar com `node server.mjs`. Para usar outra porta, defina a variável `PORT`.

Para publicar o simulador em outra hospedagem, use um serviço que execute aplicações Node.js.

## Arquivos

- `questions.json`: transcrições e metadados dos 180 números de questão, separados por dia, área e caderno. O caderno azul do Dia 1 está configurado para inglês nas questões de língua estrangeira; questões podem apontar para figuras locais em `images[].src`, alternativas ilustradas em `choiceImages` e textos compartilhados em `groupId`.
- `assets/`: 121 imagens locais extraídas ou recortadas dos PDFs oficiais, com figuras, gráficos, tabelas e alternativas ilustradas. A revisão visual encontrou materiais em 17 questões do Dia 1 e 49 do Dia 2.
- `image-review-manifest.json`: registro das páginas revisadas e das questões com material visual.
- `server-private/answer-keys.json`: gabaritos oficiais usados exclusivamente pelo servidor.
- `essay-themes.json`: tema oficial de 2025, resumos didáticos dos seis textos motivadores e propostas de treino para 2026 com links às fontes.
- `server.mjs`: servidor de arquivos, endpoint de correção (`POST /api/answer`) e avaliação de redação (`POST /api/essay/evaluate`).
- `index.html`, `styles.css` e `app.js`: interface responsiva em português, temas claro/escuro, progresso local e confirmação explícita antes de corrigir cada resposta.
- `redacao.html`, `redacao.css` e `redacao.js`: oficina de redação, rascunho local, consentimento de envio e devolutiva estruturada nas cinco competências.

## Ativar avaliação de redação por IA

A avaliação exige uma chave da API da OpenAI, mantida somente como variável secreta no servidor. No Render, abra o serviço `questoesenem2025`, acesse **Environment** e adicione `OPENAI_API_KEY`. Opcionalmente, defina `OPENAI_MODEL` para escolher outro modelo compatível; o padrão é `gpt-6.1-terra`. Salve e aguarde o novo deploy. Nunca coloque a chave nos arquivos do site, no GitHub ou no navegador. As chamadas consomem créditos da API conforme o uso. Sem a chave, a oficina e os temas funcionam, mas a avaliação permanece desativada.

Cada envio exige consentimento explícito, é enviado do servidor ao provedor de IA e não é persistido pelo aplicativo. O rascunho fica apenas no armazenamento local do navegador. A correção é uma estimativa orientativa: não representa uma nota oficial nem substitui os dois avaliadores humanos do Inep. O endpoint limita o tamanho da redação e a frequência de avaliações por endereço de rede.

## Limite do material transcrito

O texto OCR recebido para o Dia 1 substitui a extração truncada anterior; os anexos que ficaram disponíveis nesta sessão eram cópias do caderno azul. O gabarito do Dia 2 foi comparado com os 90 valores colados pelo usuário e não apresentou divergências. As páginas com material visual dos dois cadernos foram revisadas e seus elementos foram vinculados às questões correspondentes. A parte em espanhol do Dia 1 foi excluída, conforme solicitado. O OCR ainda pode conter erros de transcrição; o simulador não inventa alternativas nem imagens para preencher lacunas.


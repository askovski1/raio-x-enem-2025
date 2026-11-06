<div align="center">

# 📚 Simulado ENEM 2025

**Resolva as questões oficiais, veja o gabarito na hora e treine sua redação com correção por IA.**

[![Abrir o site](https://img.shields.io/badge/🚀_Abrir_o_site-questoesenem2025.onrender.com-4f46e5?style=for-the-badge)](https://questoesenem2025.onrender.com)

![Questões](https://img.shields.io/badge/questões-180-22c55e?style=flat-square)
![Provas](https://img.shields.io/badge/provas-Dia_1_e_Dia_2-3b82f6?style=flat-square)
![Redação](https://img.shields.io/badge/redação-5_competências-f59e0b?style=flat-square)
![Node](https://img.shields.io/badge/node-≥_20-339933?style=flat-square)

</div>

---

## ✨ O que você encontra

| 📝 Questões | ✍️ Redação |
|---|---|
| 180 questões dos cadernos oficiais, separadas por dia, área e caderno | Tema oficial de 2025 e propostas de treino para 2026 |
| Responda, confirme e veja na hora se acertou, com o gabarito oficial | Resumo dos textos motivadores e link para a proposta completa |
| Figuras, gráficos, tabelas e alternativas ilustradas | Editor com contador de palavras e rascunho salvo no seu navegador |
| Modo claro e escuro, progresso salvo no seu navegador | Correção por IA nas 5 competências do ENEM (0 a 1.000) |

## 🧭 Como usar

1. **Abra o site** e escolha o dia da prova.
2. **Responda as questões**: confirme cada resposta para ver se acertou.
3. **Vá em Redação**, escolha um tema, escreva seu texto e envie para a correção.

## 🤖 Como funciona a correção da redação

Você recebe uma leitura completa do texto:

- 🎯 **Nota estimada** de 0 a 1.000, somando as 5 competências (faixas de 40 em 40, até 200 cada)
- 🔎 **Análise de cada competência**, com o trecho observado e o próximo passo
- 💪 **O que já funciona** e **prioridades de revisão**
- 🧩 **Revisão da proposta de intervenção**

> ⚠️ **É uma estimativa para estudo.** Não é nota oficial. O ENEM usa dois avaliadores humanos independentes e a nota real pode ser diferente. Leia também a [Cartilha do Participante](https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/redacao-do-enem-2025-cartilha-do-a-participante/).

## 🔒 Privacidade

- Sua redação **só é enviada depois que você marca o consentimento**.
- O site **não guarda** o texto enviado. O rascunho fica apenas no seu navegador.
- A correção é feita pelo Google (Gemini). No plano gratuito, o Google pode usar o conteúdo enviado para melhorar seus produtos, então **não coloque dados pessoais** na redação.
- Para evitar abuso, há um limite de avaliações por pessoa em um intervalo de tempo.

## 🩺 Aviso sobre o material

As questões foram transcritas dos cadernos oficiais e podem ter pequenos erros de transcrição. Em caso de dúvida, confira no caderno original do Inep. A parte de espanhol do Dia 1 não foi incluída.

---

## 💻 Rodar no seu computador

Precisa do [Node.js](https://nodejs.org) 20 ou superior. Na pasta do projeto:

```sh
npm start
```

Depois abra `http://127.0.0.1:4173`. Para usar outra porta, defina a variável `PORT`.

## ☁️ Publicar o seu próprio site

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https%3A%2F%2Fgithub.com%2Faskovski1%2Fraio-x-enem-2025)

1. Clique no botão, conecte seu GitHub ao Render e aprove a criação do serviço.
2. Quando terminar, use o endereço `onrender.com` que aparece no painel.
3. As novas versões são publicadas manualmente pelo painel do Render (**Manual Deploy**).

> O GitHub Pages sozinho **não funciona**, porque o site precisa de um servidor Node.js.

### Ativar a correção de redação

1. Crie uma chave gratuita no [Google AI Studio](https://aistudio.google.com) (botão **Get API key**).
2. No Render, abra seu serviço, vá em **Environment** e adicione a variável `GEMINI_API_KEY` com a chave.
3. Salve e aguarde o novo deploy.

Se quiser trocar o modelo, crie também a variável `GEMINI_MODEL` (o padrão é `gemini-3.8-flash`).

> 🔐 Nunca coloque a chave nos arquivos do site, no GitHub ou no navegador. Sem a chave, as questões e os temas funcionam normalmente, mas a correção da redação fica desativada. A camada gratuita tem limites de uso por minuto e por dia.

---

## 🗂️ O que tem em cada arquivo

| Arquivo | Para que serve |
|---|---|
| `server.mjs` | Servidor do site, conferência das respostas e correção da redação |
| `index.html`, `app.js`, `styles.css` | Página das questões |
| `redacao.html`, `redacao.js`, `redacao.css` | Página da oficina de redação |
| `brand.css`, `stimuli.css` | Visual compartilhado e textos de apoio das questões |
| `questions.json`, `stimuli.json` | Questões e textos de apoio |
| `essay-themes.json` | Temas de redação, resumos dos textos motivadores e fontes |
| `assets/` | Imagens extraídas dos cadernos oficiais |
| `image-review-manifest.json` | Registro das questões com material visual |
| `server-private/answer-keys.json` | Gabaritos, usados só pelo servidor |
| `render.yaml` | Configuração de publicação no Render |

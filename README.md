# Simulado ENEM 2025

## Executar

Com Node.js 18 ou superior, abra um terminal nesta pasta e execute:

```sh
node server.mjs
```

Depois acesse `http://127.0.0.1:4173`. Para usar outra porta, defina a variável `PORT`.

## Arquivos

- `questions.json`: transcrições e metadados dos 180 números de questão, separados por dia, área e caderno. O caderno azul do Dia 1 está configurado para inglês nas questões de língua estrangeira; questões podem apontar para figuras locais em `images[].src`, alternativas ilustradas em `choiceImages` e textos compartilhados em `groupId`.
- `assets/`: 106 imagens extraídas ou recortadas dos PDFs oficiais, com figuras, gráficos, tabelas e alternativas ilustradas. A revisão visual encontrou materiais em 17 questões do Dia 1 e 49 do Dia 2.
- `image-review-manifest.json`: registro das páginas revisadas e das questões com material visual.
- `server-private/answer-keys.json`: gabaritos oficiais usados exclusivamente pelo servidor.
- `server.mjs`: servidor de arquivos e endpoint de correção (`POST /api/answer`).
- `index.html`, `styles.css` e `app.js`: interface responsiva em português, temas claro/escuro, progresso local e confirmação explícita antes de corrigir cada resposta.

## Limite do material transcrito

O texto OCR recebido para o Dia 1 substitui a extração truncada anterior; os anexos que ficaram disponíveis nesta sessão eram cópias do caderno azul. O gabarito do Dia 2 foi comparado com os 90 valores colados pelo usuário e não apresentou divergências. As páginas com material visual dos dois cadernos foram revisadas e seus elementos foram vinculados às questões correspondentes. A parte em espanhol do Dia 1 foi excluída, conforme solicitado. O OCR ainda pode conter erros de transcrição; o simulador não inventa alternativas nem imagens para preencher lacunas.

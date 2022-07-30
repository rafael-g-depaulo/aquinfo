# Prisma

na lib db as coisas do banco são feitas. se vc tiver na pasta lib/bd vc pode só usar diretamente a CLI do prisma pra mexer nas coisas, fazer as migrations e tal

https://www.prisma.io/docs/reference/api-reference/command-reference

ah, e vc precisa ter a env var DATABASE_URL setada pra um postgres rodando em algum lugar

por algum motivo tá quebrando? n sei

## Erros comuns

se vc tiver um erro weakRef isn't defined (provavelmente no prisma studio), cheque se a sua versão do node tá correta de acordo com o .nvmrc na root do projeto

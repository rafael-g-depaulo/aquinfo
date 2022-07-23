# Tools

## Main dependencies
1. yarn v3.2.2.
2. node v16.16.0 (Gallium)
3. Typescript v4.7.2

## Main tools/frameworks
1. express
2. next (react)
3. prisma (postgres)

## Front
- react-hook-form (forms)
- axios + react-query (comunicação com back)
- styled-components (estilização)
- react-router (roteamento do front)
- [zustand](https://github.com/pmndrs/zustand) (gerenciamento de estado) 

# Infra

## Repo e CI/CD
- Monorepo Nx no github
- Github Actions pra deploy
  - Netlify
  - Heroku

## Deploys
- Front -> Neftlify 
- Back -> Heroku (opcionalmente com docker se a gente tiver tempo e saco)
- Domínio -> registro.br

## Testes
tem jest e cypress configurados. não vamos usar.

## Linters
eslint & prettier

FROM node:16

USER node

WORKDIR /app

# # Give owner rights to the current user
# RUN chown -Rh $user:$user /app
# USER $user

# install deps
COPY package.json yarn.lock .yarn/ /app/
RUN yarn

# add config files
COPY .editorconfig .eslintrc.json .nvmrc .prettierignore .prettierrc .yarnrc.yml babel.config.json jest.config.ts jest.preset.js nx.json tsconfig.base.json workspace.json /app/

# # add global files
# COPY tools libs docs .yarn /app/

# RUN ["ls", "node_modules"]

RUN  ["ls"]

ENTRYPOINT ["yarn"]

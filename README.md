# Soccer Score App

Fullstack Monorepo React + Node for Live Soccer Scores

## Monorepo Format

The project is stablished in a monorepo style based on yarn workspaces. The root
project has 3 packages/workspaces which are: frontend (web), backend (api) and
development static testing for Eslint and Prettier (eslint-node-config)

## Instalation

- Clone the repository;
- Run `yarn` It will install all root project's, client's and server's
  dependencies;
- Create a `.env` file with `API_PORT`, `DB_USERNAME`, `DB_PASSWORD` and
  (`API_FOOTBALL_WIDGET_KEY`)[https://apifootball.com/]
- For database deployment, create a (MongoDB Cluster)[https://www.mongodb.com/]
  called `soccer-score-db`.

## Running Env

Since it's a monolith, the backend and frontend are ran concurrently by running
`yarn start` on root level. To run backend only, run
`cd ./packages/api && yarn start`; to run the frontend only, run
`cd ./packages/web && yarn start`.

## Sync Eslint + Prettier settings

All workspaces share the `eslint-node-config` Prettier and Eslint settings, so
if some changes have to be made in those settings, the only `.eslintrc` file
that should be changed is in that folder.

## Testing

For testing on watch mode, run `yarn test`. Since frontend and backend are ran
in defferent Jest settings, it's recommended to run separately front and backend
tests to avoid false positives due to jest config.

So, in order to do that, run `cd client` or `cd server` and then `yarn test`

# Backend Endpoints

- `/live` is a get request, which does not need any params and retuns the live
  events;
- `/results` is a get request, which accepts a date param in YYYY-MM-DD format
  which returns finished events in that specific date;

## Playground Deployment

The monorepo was deployed on Vercel splited in front and backend projects.

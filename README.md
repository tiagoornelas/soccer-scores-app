# Soccer Score App

Fullstack Monorepo React + Node for Live Soccer Scores with demo playground deployed on (Vercel)[https://vercel.com/].

# [Demo](https://soccer-scores-app-web.vercel.app/)
![image](https://user-images.githubusercontent.com/78763308/198755343-7982d0d9-2a85-49d2-965b-0c89d33ac88e.png)

## Features

- Live events coverage with score and time with auto update
- Match results (not inplay) fetched from app's database with proxy checking for assuring data liability when necessary
- Querying on match results with `react-query` reducing amount of backend requests and load times

Disclaimer: The free API version may apply some restrictions on returned data;

## Monorepo Format

The project is stablished in a monorepo style based on yarn workspaces. The root
project has 3 packages/workspaces which are: frontend (web), backend (api) and
development static testing for Eslint and Prettier (eslint-node-config)

## Folder/Repo Structure

.  
└── soccer-scores-app/  
├── packages/  
    │   ├── api/  
    │   │   └── package.json  
    │   ├── web/  
    │   │   └── package.json  
    │   └── eslint-node-config/  
    │       └── package.json  
    └── package.json  

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

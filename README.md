# soccer-scores-app
Fullstack Monorepo React + Node for Live Soccer Scores

# live-soccer-scores

A React+Node project for soccer fans with live scores and past data

## Requirements

Node 14 or higher

## Instalation

run `yarn`

It will install all root project's, client's and server's dependencies.

## Running Env

Since it's a monolith, the backend and frontend are ran concurrently by running
`yarn start` on root level.

On the console, the backend will be logged with a 0 tag associated, while the
frontend will be identified by the number 1 tag.

## Parallel eslint configs

Since the project has two workspaces, we are running two different eslint config
files to prevent bugs and inforce style.

## Testing

For testing on watch mode, run `yarn test`. Since frontend and backend are ran
in defferent Jest settings because of different syntax, it's recommended to run
separately front and backend tests to avoid false positives due to jest config.

So, in order to do that, run `cd client` or `cd server` and then `yarn test`

# Backend Endpoints

## Live Matches

`BASE_URL/live` for returning the live matches as follows. No body or params are
needed. `{ success: true, data: { live_matches: length, matches: array } }`

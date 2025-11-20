import express, { Request, Response } from 'express';

import { envs } from './config';
import { GithubController } from './presentation/github/controller';

(() => {
  main();
})();

function main() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const controller = new GithubController();

  app.post('/api/github', controller.webhookHandle);

  app
    .listen(envs.PORT)
    .on('listening', () => {
      console.log(`Server started on port ${envs.PORT}`);
    })
    .on('error', (error) => {
      console.error(error);
    });
}

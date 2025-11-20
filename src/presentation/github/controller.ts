import { Request, Response } from 'express';

export class GithubController {
  constructor() {}

  webhookHandle = (req: Request, res: Response) => {
    res.json('Github Webhook');
  };
}

import express, { Request, Response } from 'express';

import { envs } from './config';

(() => {

    main();

})();

function main() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.post('/api/github', (req: Request, res: Response) => {
        res.json('Github Endpoint')
    })

    app.listen(envs.PORT).on('listening', () => {
        console.log(`Server started on port ${envs.PORT}`);
    }).on('error', (error) => {
        console.error(error);
    });

}
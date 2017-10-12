'use strict';

import express from 'express';
import cors from 'cors';

import Options from './options';
import ApiRouter from './api/api.router';

const app = express();
const corsOptions = {
    origin: true, //['http://localhost:3500', 'http://localhost:8082'],
    methods: ['GET'],
    optionsSuccessStatus: 204
};
const CORSMiddleware = cors(corsOptions);

app.options('*', CORSMiddleware)
app.use(CORSMiddleware);
app.use(`${Options.API_URI}`, ApiRouter);

app.listen(Options.SERVER_PORT, () => console.log('API Ready'));
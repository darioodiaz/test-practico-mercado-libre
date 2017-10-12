'use strict';

import { Router } from 'express';
import ItemRouter from './items/items.router';

const ApiRouter = Router();

ApiRouter.use('/items', ItemRouter);

export default ApiRouter;
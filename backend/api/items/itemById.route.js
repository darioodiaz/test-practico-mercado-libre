'use strict';

import MLAPI from '../utils/mercado-libre.api';

function ItemByIdRoute(req, res) {
    const id = req.params.id;
    if (!id) {
        res.status(500).send({ error: 'param Id required' });
        return;
    }
    MLAPI.itemById(id).then(({ data }) => res.status(200).send(data));
}

export default ItemByIdRoute;
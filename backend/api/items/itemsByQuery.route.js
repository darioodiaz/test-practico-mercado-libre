'use strict';

import MLAPI from '../utils/mercado-libre.api';

function ItemByQuery(req, res) {
    const query = req.query.q;
    if (!query) {
        res.status(500).send({ error: 'Query field required' });
        return;
    }
    MLAPI.itemsByQuery(query).then(({ data }) => res.status(200).send(data));
}

export default ItemByQuery;
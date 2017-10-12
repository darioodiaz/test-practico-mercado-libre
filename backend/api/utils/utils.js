'use strict';

import https from 'https';

const ENDPOINT = 'https://api.mercadolibre.com';
const RESOURCES = {
    SEARCH: `${ENDPOINT}/sites/MLA/search`,
    ITEMS: `${ENDPOINT}/items`,
    CURRENCY: `${ENDPOINT}/currencies`,
    ITEM_DESCRIPTION: 'description'
};

function request(resource = '', conf = {}) {
    let params = '';
    if (conf.queryString) {
        params = `?q=${conf.queryString}`;
    } else if (conf.queryParams) {
        params = `/${conf.queryParams}`;
    }
    const url = resource.concat(params);
    return new Promise((resolve) => {
        const request = https.get(url, onRequestData);
        request.on('error', (error) => { throw error });

        function onRequestData(response) {
            let body = '';
            response.on('data', (chunk) => body += chunk);
            response.on('end', () => {
                const data = JSON.parse(body);
                resolve({ data });
            });
        }
    });
}
function mapItemsInfo(items = []) {
    const promises = items.map((item) => getCurrency(item.currency_id).then(({ data }) => buildItemInfo(item, data)));
    return Promise.all(promises);
}

function buildItemInfo(item, currencyData = {}) {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: currencyData.symbol,
            amount: item.price,
            decimals: currencyData.decimal_places
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: item.seller_address.state.name
    };
}

function getCurrency(id) {
    const conf = { queryParams: id };
    return request(RESOURCES.CURRENCY, conf);
}
function getItemDescription(id) {
    return request(`${RESOURCES.ITEMS}/${id}/${RESOURCES.ITEM_DESCRIPTION}`).then(({ data }) => data.plain_text);
}

export default {
    request,
    mapItemsInfo,
    getItemDescription,
    RESOURCES
}
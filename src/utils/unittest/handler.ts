import products from '../../../public/data/products.json';
import { HOST } from '../constants';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(HOST + '/data/products.json', ({ request }) => {
    return HttpResponse.json(products);
  })
];


import { http } from 'msw'
import products from "../../../public/data/products.json"

export const handlers = [
    http.get('/data/products.json', (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json(products), ctx.delay(30))
  })
]
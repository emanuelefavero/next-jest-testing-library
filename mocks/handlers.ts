import { rest } from 'msw'
import { apiURL } from '@/config'

export const handlers = [
  rest.get(`${apiURL}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    )
  }),
]

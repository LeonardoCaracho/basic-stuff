const { Router } = require('express')

const routes = new Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json()
})

export default routes

import { Request, Response } from 'express'

class UserController {
    public index (req: Request, res: Response): Promise<Response> {
        return res.json({ "some": 'nooooo' })
    }
}

export default new UserController()
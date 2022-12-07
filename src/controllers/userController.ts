import { Response, Request } from "express";

export class UserController {
  indexAll (req: Request, res: Response): Response {

    return res.status(200).json({ name: 'Rainério' })
  }

  index (req: Request<{id: string}>, res: Response): Response {
    const { id } = req.params;

    return res.status(200).json({ id: id })
  }

  create (req: Request, res: Response): Response {
    const newUser = req.body;

    return res.status(201).json({ created: newUser})
  }

  update (req: Request<{id: string}>, res: Response): Response {
    const { id } = req.params;
    const modifiedUser = req.body;

    modifiedUser.id = id

    return res.status(200).json(modifiedUser);
  }

  delete (req: Request<{id: string}>, res: Response): Response {    
    return res.status(200).send('ok')
  }
}
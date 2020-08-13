import { Request, Response } from 'express';

import db from '../database/connection';
import Hash from '../utils/hash';

const hash = new Hash();

export default class UserController {
  public async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const hashedPassword = await hash.generateHash(password);

    try {
      const [user_id] = await db('users').insert({
        name,
        email,
        password: hashedPassword,
      });

      return response.json({ user_id, name });
    } catch (err) {
      return response
        .status(400)
        .json({ error: 'Unexpected error while creating new user' });
    }
  }
}

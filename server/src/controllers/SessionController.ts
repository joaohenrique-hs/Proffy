import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

import db from '../database/connection';
import Hash from '../utils/hash';

const hash = new Hash();

export default class SessionController {
  public async create(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const [user] = await db('users')
        .where({
          email: email,
        })
        .select('id', 'password');

      if (!user) {
        return response
          .status(400)
          .json({ error: 'Email or password incorrect!' });
      }

      const passwordMatch = await hash.compareHash(password, user.password);

      if (!passwordMatch) {
        return response
          .status(400)
          .json({ error: 'Email or password incorrect!' });
      }

      const { secret, expiresIn } = jwtConfig;

      const token = jwt.sign(
        {
          user_id: user.id,
        },
        secret,
        {
          expiresIn,
        }
      );

      return response.json({ token });
    } catch (err) {
      console.log(err);
      return response
        .status(400)
        .json({ error: 'Unexpected error while login' });
    }
  }
}

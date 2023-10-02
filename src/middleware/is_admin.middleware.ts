import { NextFunction, Request, Response } from 'express';
import {
  AuthFailureResponse,
} from '../helpers/response';
import { LANGUAGE_KEYS } from '../constants';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  const loggedUser = user;
  if (loggedUser && loggedUser.role !== 'admin') {
    console.log('Invalid login details, not admin');
    return AuthFailureResponse(res, LANGUAGE_KEYS.USER_UNAUTHORIZED);
  }
  return next();
};

export default isAdmin;

import { NextFunction, Request, Response } from 'express';
import {
  AuthFailureResponse,
  NotFoundResponse,
  ForbiddenResponse,
  BadRequestResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  FailureMsgResponse,
  SuccessResponse,
  AccessTokenErrorResponse,
  TokenRefreshResponse,
} from '../helpers/response';
import { verifyJwt } from '../utils/jwt';
import { ACCESS_TOKEN_SECRET } from '../constants';
import i18nInstance from '../helpers/translator';

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(' ')[1] || '';
  if (!accessToken) return AccessTokenErrorResponse(res, 'Invalid token');

  const decoded = await verifyJwt(accessToken, ACCESS_TOKEN_SECRET);
  if (!decoded) return AccessTokenErrorResponse(res, 'Unauthorized');

  res.locals.user = decoded;
  const { language } = decoded;

  //change the apps language to the user preferred.
  if (language) i18nInstance.changeLanguage(language);

  //verify user actually exists
  // const validUser = await demoService.getUserInfo(res.locals.user);

  console.log(decoded);
  return next();
};

export default isAuth;

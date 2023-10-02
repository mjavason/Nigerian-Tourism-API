import { Response } from 'express';
import { LANGUAGE_KEYS } from '../constants';
import translator from './translator';

enum StatusCode {
  SUCCESS = '10000',
  FAILURE = '10001',
  RETRY = '10002',
  INVALID_ACCESS_TOKEN = '10003',
  WE_MOVE = '10004',
}

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export function AuthFailureResponse(res: Response, message = LANGUAGE_KEYS.AUTH_FAILURE): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function DefaultMsgResponse(res: Response, message = LANGUAGE_KEYS.DEFAULT): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function NotFoundResponse(res: Response, message = LANGUAGE_KEYS.NOT_FOUND): Response {
  return res
    .status(ResponseStatus.NOT_FOUND)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function ForbiddenResponse(res: Response, message = LANGUAGE_KEYS.FORBIDDEN): Response {
  return res
    .status(ResponseStatus.FORBIDDEN)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function BadRequestResponse(
  res: Response,
  message = LANGUAGE_KEYS.BAD_PARAMETERS,
): Response {
  return res
    .status(ResponseStatus.BAD_REQUEST)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function ForbiddenButWeMoveResponse<T>(
  res: Response,
  data: T,
  message = LANGUAGE_KEYS.BAD_PARAMETERS,
): Response {
  return res
    .status(ResponseStatus.FORBIDDEN)
    .json({ success: true, status_code: StatusCode.WE_MOVE, message: translator.t(message), data });
}

export function InternalErrorResponse(
  res: Response,
  message = LANGUAGE_KEYS.INTERNAL_ERROR,
): Response {
  return res
    .status(ResponseStatus.INTERNAL_ERROR)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function SuccessMsgResponse(res: Response, message = LANGUAGE_KEYS.FETCHED): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ success: true, status_code: StatusCode.SUCCESS, message: translator.t(message) });
}

export function FailureMsgResponse(res: Response, message = LANGUAGE_KEYS.ERROR): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) });
}

export function RouteNotFoundResponse(
  res: Response,
  message = LANGUAGE_KEYS.ROUTE_NOT_FOUND,
): Response {
  return res
    .status(ResponseStatus.NOT_FOUND)
    .send({ success: true, status_code: StatusCode.RETRY, message: translator.t(message) });
}

export function SuccessResponse<T>(
  res: Response,
  data: T,
  message = LANGUAGE_KEYS.SUCCESSFUL,
): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .json({ success: true, status_code: StatusCode.SUCCESS, message: translator.t(message), data });
}

export function AccessTokenErrorResponse(
  res: Response,
  message = LANGUAGE_KEYS.ACCESS_TOKEN_ERROR_RESPONSE,
): Response {
  return res.status(ResponseStatus.UNAUTHORIZED).send({
    success: false,
    status_code: StatusCode.INVALID_ACCESS_TOKEN,
    message: translator.t(message),
  });
}

export function TokenRefreshResponse(
  res: Response,
  message = LANGUAGE_KEYS.FETCHED,
  accessToken: string,
  refreshToken: string,
): Response {
  return res.status(ResponseStatus.SUCCESS).json({
    success: true,
    status_code: StatusCode.SUCCESS,
    message: translator.t(message),
    access_token: accessToken,
    refresh_token: refreshToken,
  });
}

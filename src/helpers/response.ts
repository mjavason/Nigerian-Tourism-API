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
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.UNAUTHORIZED);
}

export function NotFoundResponse(res: Response, message = LANGUAGE_KEYS.NOT_FOUND): Response {
  return res
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.NOT_FOUND);
}

export function ForbiddenResponse(res: Response, message = LANGUAGE_KEYS.FORBIDDEN): Response {
  return res
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.FORBIDDEN);
}

export function BadRequestResponse(
  res: Response,
  message = LANGUAGE_KEYS.BAD_PARAMETERS,
): Response {
  return res
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.BAD_REQUEST);
}

export function ForbiddenButWeMoveResponse<T>(
  res: Response,
  data: T,
  message = LANGUAGE_KEYS.BAD_PARAMETERS,
): Response {
  return res
    .json({ success: true, status_code: StatusCode.WE_MOVE, message: translator.t(message), data })
    .status(ResponseStatus.FORBIDDEN);
}

export function InternalErrorResponse(
  res: Response,
  message = LANGUAGE_KEYS.INTERNAL_ERROR,
): Response {
  return res
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.INTERNAL_ERROR);
}

export function SuccessMsgResponse(res: Response, message = LANGUAGE_KEYS.FETCHED): Response {
  return res
    .send({ success: true, status_code: StatusCode.SUCCESS, message: translator.t(message) })
    .status(ResponseStatus.SUCCESS);
}

export function FailureMsgResponse(res: Response, message = LANGUAGE_KEYS.ERROR): Response {
  return res
    .send({ success: false, status_code: StatusCode.FAILURE, message: translator.t(message) })
    .status(ResponseStatus.SUCCESS);
}

export function SuccessResponse<T>(
  res: Response,
  data: T,
  message = LANGUAGE_KEYS.SUCCESSFUL,
): Response {
  return res
    .json({ success: true, status_code: StatusCode.SUCCESS, message: translator.t(message), data })
    .status(ResponseStatus.SUCCESS);
}

export function AccessTokenErrorResponse(
  res: Response,
  message = LANGUAGE_KEYS.ACCESS_TOKEN_ERROR_RESPONSE,
): Response {
  return res
    .send({
      success: false,
      status_code: StatusCode.INVALID_ACCESS_TOKEN,
      message: translator.t(message),
    })
    .status(ResponseStatus.UNAUTHORIZED);
}

export function TokenRefreshResponse(
  res: Response,
  message = LANGUAGE_KEYS.FETCHED,
  accessToken: string,
  refreshToken: string,
): Response {
  return res
    .json({
      success: true,
      status_code: StatusCode.SUCCESS,
      message: translator.t(message),
      access_token: accessToken,
      refresh_token: refreshToken,
    })
    .status(ResponseStatus.SUCCESS);
}

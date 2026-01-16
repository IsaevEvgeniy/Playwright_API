import { STATUS_MESSAGE } from '../../enum/message.enum';
import { STATUS_CODE } from '../../enum/status.enum';
import { StatusDTO } from '../../types/rest/status.type';

export const statusFixtures = {
  success: {
    ok: {
      status: STATUS_CODE.OK,
      message: STATUS_MESSAGE.OK,
    } as StatusDTO,

    created: {
      status: STATUS_CODE.CREATED,
      message: STATUS_MESSAGE.CREATED,
    } as StatusDTO,
  },

  clientError: {
    badRequest: {
      status: STATUS_CODE.BAD_REQUEST,
      message: STATUS_MESSAGE.BAD_REQUEST,
    } as StatusDTO,

    unauthorized: {
      status: STATUS_CODE.UNAUTHORIZED,
      message: STATUS_MESSAGE.UNAUTHORIZED,
    } as StatusDTO,

    forbidden: {
      status: STATUS_CODE.FORBIDDEN,
      message: STATUS_MESSAGE.FORBIDDEN,
    } as StatusDTO,

    notFound: {
      status: STATUS_CODE.NOT_FOUND,
      message: STATUS_MESSAGE.NOT_FOUND,
    } as StatusDTO,
  },

  serverError: {
    internalServerError: {
      status: STATUS_CODE.INTERNAL_SERVER_ERROR,
      message: STATUS_MESSAGE.INTERNAL_SERVER_ERROR,
    } as StatusDTO,
  },
};

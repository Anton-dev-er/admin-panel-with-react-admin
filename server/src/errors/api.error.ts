import { QueryFailedError } from "typeorm";

const mapPgError = (code, table, foreighTable) => {
  const mapPgErrorList = {
    23503: `A ${table} that has ${foreighTable}s in it cannot be deleted`
  };

  return mapPgErrorList[code];
};


class ApiError extends Error {
  type: "ApiError";
  status: number;
  errors: string[];

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }

  static internal(error: any, table?: string) {
    let message = "Internal error";

    console.log(error);

    if (error instanceof QueryFailedError && error?.driverError) {
      const pgErrorCode = error.driverError.code;
      const pgErrorMessage = mapPgError(pgErrorCode, table, error.driverError.table);

      if (pgErrorCode && pgErrorMessage) {
        message = pgErrorMessage;
      } else {
        message = error.message;
      }
    }

    return new ApiError(500, message);
  }
}

export default ApiError;
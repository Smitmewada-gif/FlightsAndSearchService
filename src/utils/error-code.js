const ClientErrors = Object.freeze({
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401
});

const serverErrors = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501
});

const SuccessCodes = Object.freeze({
  OK: 200,
  CREATED: 201,
  
});

module.exports = {
  ClientErrors,
  serverErrors,
  SuccessCodes
}
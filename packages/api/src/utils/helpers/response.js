function respondWithData(res, returnObject, code = 200) {
  return res.status(code).json({
    success: true,
    payload: returnObject,
  });
}

function respondWithError(res, err, code = 500) {
  return res.status(code).json({
    success: false,
    message: err.message,
  });
}

export { respondWithData, respondWithError };

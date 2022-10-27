import { respondWithError } from "../utils/helpers/response.js";

const error = async (err, req, res) => {
  console.log(err.message);
  respondWithError(res, err);
};

export default error;

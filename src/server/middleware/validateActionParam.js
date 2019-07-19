// eslint-disable-next-line import/named
import { Action } from '../model';
import { NOT_FOUND, createError } from '../util/error';

/**
 * Validate action request parameter
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} actionId
 */
const validateActionParam = async (req, res, next, actionId) => {
  try {
    const action = await Action.getById(actionId);

    req.action = action;

    return next();
  } catch (error) {
    return next(
      createError({
        message: 'Action ID is invalid.',
        status: NOT_FOUND,
      }),
    );
  }
};

export default validateActionParam;

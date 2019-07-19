// eslint-disable-next-line import/named
import { Action } from '../../model';
import { OK, createSuccess } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Get all actions
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getActions = async (req, res, next) => {
  try {
    const actions = await Action.getAll();

    return res.status(OK).json(
      createSuccess({
        data: actions,
      }),
    );
  } catch (error) {
    return next(
      createError({
        status: GENERIC_ERROR,
        message: 'Could not get actions',
      }),
    );
  }
};

export default getActions;

import { createSuccess, OK } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Get action by id
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getActionById = (req, res, next) => {
  try {
    const { action } = req;

    return res.status(OK).json(createSuccess({ data: action }));
  } catch (error) {
    return next(
      createError({
        message: 'Could not get action with given ID',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default getActionById;

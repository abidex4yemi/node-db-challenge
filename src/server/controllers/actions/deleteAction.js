// eslint-disable-next-line import/named
import { Action } from '../../model';
import { OK, createSuccess } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Delete a action given the id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteAction = async (req, res, next) => {
  try {
    const { id } = req.action;

    // Delete action from database
    await Action.remove(id);

    return res.status(OK).json(
      createSuccess({
        success: true,
        message: 'Action deleted successfully',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not delete action with the given ID',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default deleteAction;

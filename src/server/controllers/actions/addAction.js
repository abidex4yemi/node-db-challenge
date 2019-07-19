// eslint-disable-next-line import/named
import { Action, Project } from '../../model';
import { createError, NOT_FOUND, GENERIC_ERROR } from '../../util/error';
import { createSuccess, CREATED } from '../../util/success';

/**
 * Insert new action
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addAction = async (req, res, next) => {
  try {
    // Get action from req body
    const actionDetails = req.body.sanitizedBody;

    // Check if project id is valid
    await Project.getById(actionDetails.project_id);

    // Insert new action
    const { id } = await Action.insert(actionDetails);

    // Get newly persisted action
    const createdAction = await Action.getById(id);

    return res.status(CREATED).json(
      createSuccess({
        data: createdAction,
      }),
    );
  } catch (error) {
    if (error && error.code === 'SQLITE_CONSTRAINT') {
      return next(
        createError({
          message: 'Project ID is invalid.',
          status: NOT_FOUND,
        }),
      );
    }

    return next(
      createError({
        message: 'Could not add new action',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default addAction;

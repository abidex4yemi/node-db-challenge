// eslint-disable-next-line import/named
import { Action, Project } from '../../model';
import { createError, NOT_FOUND, GENERIC_ERROR } from '../../util/error';
import { OK, createSuccess } from '../../util/success';

/**
 * Update action given the project id and action id is valid
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const updateAction = async (req, res, next) => {
  try {
    const actionDetails = req.body.sanitizedBody;

    const actionId = req.action.id;

    const project = await Project.getById(actionDetails.project_id);

    if (project === null) {
      return next(
        createError({
          message: 'Project ID is invalid.',
          status: NOT_FOUND,
        }),
      );
    }

    const updatedAction = await Action.update(actionId, actionDetails);

    return res.status(OK).json(
      createSuccess({
        data: updatedAction,
        message: 'Action updated successfully',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not update action',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default updateAction;

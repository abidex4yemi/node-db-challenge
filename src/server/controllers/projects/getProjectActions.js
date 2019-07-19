// eslint-disable-next-line import/named
import { Project } from '../../model';
import { createSuccess, OK } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Get project actions by id
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getProjectActions = async (req, res, next) => {
  try {
    const { id } = req.project;

    const actions = await Project.getProjectActions(id);

    return res.status(OK).json(createSuccess({ data: actions }));
  } catch (error) {
    return next(
      createError({
        message: 'Could not get project actions',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default getProjectActions;

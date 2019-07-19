// eslint-disable-next-line import/named
import { Project } from '../../model';
import { OK, createSuccess } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Delete a project given the id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.project;

    // Delete project from database
    await Project.remove(id);

    return res.status(OK).json(
      createSuccess({
        success: true,
        message: 'Project deleted successfully',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not delete project with the given ID',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default deleteProject;

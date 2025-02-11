// eslint-disable-next-line import/named
import { Project } from '../../model';
import { createSuccess, OK } from '../../util/success';
import { createError, NOT_FOUND, GENERIC_ERROR } from '../../util/error';

/**
 * Update project given the project id and action id is valid
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const updateProject = async (req, res, next) => {
  try {
    const projectDetails = req.body.sanitizedBody;

    const projectId = req.project.id;

    const project = await Project.getById(projectId);

    if (project === null) {
      return next(
        createError({
          message: 'Project ID is invalid.',
          status: NOT_FOUND,
        }),
      );
    }

    const updatedProject = await Project.update(projectId, projectDetails);

    return res.status(OK).json(
      createSuccess({
        data: updatedProject,
        message: 'Project updated successfully',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not update project details with the given ID',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default updateProject;

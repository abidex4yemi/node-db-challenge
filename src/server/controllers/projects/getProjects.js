// eslint-disable-next-line import/named
import { Project } from '../../model';
import { OK, createSuccess } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Get all projects
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.getAll();

    return res.status(OK).json(
      createSuccess({
        data: projects,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not get projects',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default getProjects;

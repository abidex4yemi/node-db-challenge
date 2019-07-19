// eslint-disable-next-line import/named
import { Project } from '../../model';
import { CREATED, createSuccess } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Insert new project
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addProject = async (req, res, next) => {
  try {
    // Get project from req body
    const projectDetails = req.body.sanitizedBody;

    // Insert new project
    const { id } = await Project.insert(projectDetails);

    // Get newly created project
    const createdProject = await Project.getById(id);

    return res.status(CREATED).json(
      createSuccess({
        data: createdProject,
        message: 'Project added successfully',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not add project',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default addProject;

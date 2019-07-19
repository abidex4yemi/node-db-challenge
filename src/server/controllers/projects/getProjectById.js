import { createSuccess, OK } from '../../util/success';
import { createError, GENERIC_ERROR } from '../../util/error';

/**
 * Get project by id
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const getProjectById = (req, res, next) => {
  try {
    const { project } = req;

    return res.status(OK).json(createSuccess({ data: project }));
  } catch (error) {
    return next(
      createError({
        message: 'Could not get project with the given ID',
        status: GENERIC_ERROR,
      }),
    );
  }
};

export default getProjectById;

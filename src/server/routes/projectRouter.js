import express from 'express';
import {
  getProjects,
  addProject,
  getProjectById,
  updateProject,
  getProjectActions,
  deleteProject,
} from '../controllers/projects';
import { validateProjectParam, validateProjectBody } from '../middleware';

const router = express.Router();

// Validate any request url parameter (id) to project route
// `Note: router.param()` is a native method of express router
router.param('id', validateProjectParam);

router
  .route('/projects')
  .get(getProjects)
  .post(validateProjectBody, addProject);

router
  .route('/projects/:id')
  .get(getProjectById)
  .put(validateProjectBody, updateProject)
  .delete(deleteProject);

router.route('/projects/:id/actions').get(getProjectActions);

export default router;

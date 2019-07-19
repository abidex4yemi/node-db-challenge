import express from 'express';
import { getProjects } from '../controllers/projects';
import { validateProjectParam } from '../middleware';

const router = express.Router();

// Validate any request url parameter (id) to project route
// `Note: router.param()` is a native method of express router
router.param('id', validateProjectParam);

router.route('/projects').get(getProjects);

export default router;

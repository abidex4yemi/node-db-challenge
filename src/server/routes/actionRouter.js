import express from 'express';
import { validateActionParam } from '../middleware';
import { getActions } from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router
router.param('id', validateActionParam);

router.route('/actions').get(getActions);

export default router;

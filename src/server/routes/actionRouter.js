import express from 'express';
import { validateActionParam, validateActionBody } from '../middleware';
import { getActions, addAction } from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router
router.param('id', validateActionParam);

router
  .route('/actions')
  .get(getActions)
  .post(validateActionBody, addAction);

export default router;

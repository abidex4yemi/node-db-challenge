import express from 'express';
import { validateActionParam, validateActionBody } from '../middleware';
import {
  getActions, addAction, updateAction, getActionById, deleteAction,
} from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router
router.param('id', validateActionParam);

router
  .route('/actions')
  .get(getActions)
  .post(validateActionBody, addAction);

router
  .route('/actions/:id')
  .put(validateActionBody, updateAction)
  .get(getActionById)
  .delete(deleteAction);

export default router;

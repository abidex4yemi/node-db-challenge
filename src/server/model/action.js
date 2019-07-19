import actionModel from '../../db/helpers/action-model';

module.exports = (knex) => {
  const models = actionModel(knex);

  return {
    ...models,
  };
};

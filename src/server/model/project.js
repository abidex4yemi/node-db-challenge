import projectModel from '../../db/helpers/project-model';

module.exports = (knex) => {
  const models = projectModel(knex);

  return {
    ...models,
  };
};

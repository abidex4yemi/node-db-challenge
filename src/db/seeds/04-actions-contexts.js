/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('actions_contexts').insert([
    { action_id: 1, context_id: 3 },
    { action_id: 1, context_id: 2 },
    { action_id: 1, context_id: 2 },
    { action_id: 2, context_id: 3 },
    { action_id: 2, context_id: 3 },
    { action_id: 2, context_id: 3 },
  ]);
};

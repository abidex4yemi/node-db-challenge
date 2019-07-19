/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('contexts').insert([
    { name: 'at home' },
    { name: 'at work' },
    { name: 'at computer' },
    { name: 'file income taxes' },
    { name: 'online' },
  ]);
};

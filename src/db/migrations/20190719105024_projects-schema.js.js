/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('projects', (projects) => {
    projects.increments();

    projects.string('name', 128).notNullable();
    projects.text('description').notNullable();
    projects.boolean('completed').defaultTo(false);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};

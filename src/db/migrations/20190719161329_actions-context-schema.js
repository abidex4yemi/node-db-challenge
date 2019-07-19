/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('actions_contexts', (table) => {
    table.increments();

    table
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('actions_contexts');
};

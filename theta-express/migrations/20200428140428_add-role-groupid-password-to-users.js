exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.integer('groupId').unsigned().references('groups.id');
    table.string('password');
    table.enu('role', ['admin', 'user']).defaultTo('user');
  });
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('groupId');
    table.dropColumn('password');
    table.dropColumn('role');
  });
};

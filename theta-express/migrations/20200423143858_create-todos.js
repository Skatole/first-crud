exports.up = (knex) => {
  return knex.schema.createTable('Todos', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('status');
    table.integer('userID').unsigned().references('users.id');
    table.integer('categoryID').unsigned().references('categories.id');
    table
      .timestamp('updated_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('Todos');
};

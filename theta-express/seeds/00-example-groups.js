exports.seed = (knex) => {
  knex('groups').insert([
    {
      id: 1,
      name: 'Kiscica',
      description: 'Miau',
      location: 'ITt is ott is',
      maximalSize: 9
    },
    {
      id: 2,
      name: 'NagyCica',
      description: 'CSIIIP',
      location: 'Mindenhol',
      maximalSize: 2
    }
  ]);
};

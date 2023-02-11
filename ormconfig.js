var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  migrationsTableName: "migrations",
  // cli: {
  //   migrationsDir: 'migrations',
  // },
}

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entitties: ['**/*.entity.js']
    })
    break;

  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entitties: ['**/*.entity.ts'],
      migrationsRun: true,
    })
    break;

  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entitties: ['**/*.entity.js'],
      migrationsRun: true,
      ssl: {
        rejectUnauthorized: false,
      }
    })
    break;

  default:
    throw new Error('Unknown Environment')
}

module.exports = dbConfig;
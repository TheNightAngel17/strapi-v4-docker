const postgres = {
  client: 'postgres',
  connection: {
    database: process.env.DATABASE_NAME ?? 'strapi',
    user: process.env.DATABASE_USERNAME ?? 'strapi',
    password: process.env.DATABASE_PASSWORD ?? 'strapi',
    port: process.env.DATABASE_PORT ?? 5432,
    host: process.env.DATABASE_HOST ?? 'localhost',
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: process.env.DATABASE_NAME ?? 'strapi',
    user: process.env.DATABASE_USERNAME ?? 'strapi',
    password: process.env.DATABASE_PASSWORD ?? 'strapi',
    port: process.env.DATABASE_PORT ?? 3306,
    host: process.env.DATABASE_HOST ?? 'localhost',
  },
};

const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const db = {
  mysql,
  sqlite,
  postgres,
};


module.exports = {
  connection: process.env.DATABASE_CLIENT ? db[process.env.DATABASE_CLIENT] || db.sqlite : db.sqlite,
};


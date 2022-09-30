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

// module.exports = ({ env }) => ({
//   connection: {
//     client: env("DATABASE_CLIENT", "postgres"),

//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "strapi"),
//       user: env("DATABASE_USERNAME", "strapi"),
//       password: env("DATABASE_PASSWORD", "strapi"),
//     },
//     debug: false,
//   },
// });


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
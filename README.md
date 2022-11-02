# strapi-v4-docker
So i was pretty annoyed that with v4 of Strapi, there was no docker options, so I decided to go out and just build it the way I wanted. Feel free to use this implementation of Strapi - I'll try and make it as configurable as possible.

## Why even go down this road?
Well, i've been trying to get my homelab up and running specifically with kubernetes, and I wanted to be able to self-host a headless cms. With this docker project, I am able to create [this helm chart](https://github.com/mlx-dev/strapi-v4-helm) and deploy a highly available Strapi service on kubernetes!

However, you don't need to just use this for kubernetes! I have also supplied an example docker-compose.yml file to use with a generic docker deployment.

## How I go to this state
I basically followed [these steps](https://blog.dehlin.dev/docker-with-strapi-v4) to get the main generic Strapi up and running with docker.

I then started messing around with the config files to add more customization.

## What's on the docket
- add usefull plugins
- configureable media storage

## Current Environment Variables
Below are a list of different environment variables grouped by usage location. Some of which I am purposfully not setting a default for because you should create them seperatly for security and ctryptogrophy reasons.

A .env.example has ben supplied in this repo, but please, for the love of god, __change the values__. Keep your applications safe

### `server.js`
| Key | Default | Description |
|---|---|---|
| HOST | '0.0.0.0' | 🤷 |
| PORT | 1337 | 🤷 |
| APP_KEYS | REQUIRED | These seem to be related to the generation of tokens 🤷? Set with random string values to be safe. |
### `admin.js`
| Key | Default | Description |
|---|---|---|
| ADMIN_JWT_SECRET | REQUIRED | random string used for JWT creations. |
| API_TOKEN_SALT | REQUIRED | Salt used for API Tokens. |
### `database.js`
| Key | Default | Description |
|---|---|---|
| DATABASE_CLIENT | sqlite | The type of database client Strapi will use. Options are 'sqlite', 'postgres', & 'mysql'. The rest of the keys below are only use for 'postgres' and 'mysql' |
| DATABASE_NAME | strapi | Database Name |
| DATABASE_USERNAME | strapi | Database username |
| DATABASE_PASSWORD | strapi | Database password |
| DATABASE_PORT | <ul><li>postgres: 5432</li><li>mysql: 3306</li> | Port used for DB calls |
| DATABASE_HOST | localhost | Database host address |

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

test me - pdating again
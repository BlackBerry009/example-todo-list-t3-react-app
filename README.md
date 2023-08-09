use Create t3 app to make a TODO list demo.

![TODO LIST](/public/todo.jpg)
## Quick Start

here recommend a package manager library: [ni](https://github.com/antfu/ni)

1. first, make an env file to store the database URL.

```sh
echo 'DATABASE_URL="file:./dev.db"' > .env
```

if you wanna use another database, you can change the `DATABASE_URL` to your own database URL.

for example MySQL: `mysql://USER:PASSWORD@HOST:PORT/DATABASE`
more details: [Prisma](https://www.prisma.io/docs/concepts/database-connectors/mysql#configuring-an-ssl-connection)

2. therefore, we have the schema `/prisma/schema.prisma`, then create the database,

```sh
# this will generate some files in /prisma
nx prisma migrate dev --name init
```

3. if you change the schema info, you must execute the command below to update the database.

```sh
nx prisma generate
```

4. now, we can start the server.

```sh
nr dev
```

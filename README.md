# Fastify-Drizzle Orm Boilerplate

## Tech Stack

**Server:** fastify , drizzle-orm, postgresql

## Installation

Install

```bash
  cd project-name
  npm i
```

```bash
  cd project-name
  pnpm i
```

Devolopment

#### (first Migration than start your development )

```bash
  cd project-name
  npm run dev
```

```bash
  cd project-name
  pnpm run dev
```

Build

```bash
  cd project-name
  npm run build
```

```bash
  cd project-name
  pnpm run build
```

### Migration / Generate sql

```bash
  cd project-name
  npm run generate
```

```bash
  cd project-name
  pnpm run generate
```

### Migration Push in Db

```bash
  cd project-name
  npm run push
```

```bash
  cd project-name
  pnpm run push
```

### Migration Delete / drop

```bash
  cd project-name
  npm run drop
```

```bash
  cd project-name
  pnpm run drop
```

### Drizzle Studio

```bash
  cd project-name
  npm run studio
```

```bash
  cd project-name
  pnpm run studio
```

## If you want to use another sql database instead postgresql

```bash
  "generate": "drizzle-kit generate:pg",
  "push": "drizzle-kit push:pg",
```

### instead

```bash
  "generate":"drizzle-kit generate:mysql",
  "push": "drizzle-kit push:mysql",
```

```bash
  "generate":"drizzle-kit generate:sqlite",
  "push": "drizzle-kit push:sqlite",
```

## FAQ

#### Why Fastify ?

Fastify is the top choice for building highly performant web servers in Node.js. With its schema-based approach and robust TypeScript support, it provides a seamless and efficient development experience.

#### Why drizzle-orm ?

Opting for Drizzle-ORM is a strategic move towards lightweight and high-performance database operations. Its superiority over Prisma, coupled with excellent TypeScript support and a distinct schema declaration method, makes it the preferred choice for developers seeking optimal database interaction.

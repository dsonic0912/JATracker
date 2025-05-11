# Prisma ORM Setup

This project uses Prisma ORM with SQLite for database management.

## Database Schema

The database schema includes the following models:

- **User**: Represents a user of the application
- **Resume**: Represents a resume created by a user
- **Contact**: Contact information for a resume
- **Social**: Social media links for a contact
- **Education**: Educational background entries
- **Work**: Work experience entries
- **WorkBadge**: Skills/technologies used in a work experience
- **Skill**: Skills listed in a resume
- **Project**: Projects showcased in a resume
- **ProjectTech**: Technologies used in a project
- **ProjectLink**: Links to project resources

## Common Commands

### Generate Prisma Client

```bash
npx prisma generate
```

### Create a Migration

```bash
npx prisma migrate dev --name <migration-name>
```

### Reset Database

```bash
npx prisma migrate reset
```

### Open Prisma Studio

```bash
npx prisma studio
```

## Database Connection

The database connection is managed in `src/lib/prisma.ts`. This file creates a singleton instance of the Prisma client to prevent connection exhaustion during development.

## Testing

You can test the database connection by visiting the `/db-test` page in the application. This page will create a test user with a resume and display the created data.

## Switching to PostgreSQL

If you want to switch to PostgreSQL in the future, update the `datasource` block in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

And add the `DATABASE_URL` to your `.env` file:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

Then run:

```bash
npx prisma migrate dev
```

to create the necessary tables in your PostgreSQL database.

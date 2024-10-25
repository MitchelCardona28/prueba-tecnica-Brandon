# Wizzer Backend Challenge

- [Project implementation summary](#project-implementation-summary)
- [Running the project](#running-the-project)
  - [Requirements](#requirements)
  - [Project setup](#project-setup)
- [Instructions for running Database migration](#instructions-for-running-database-migration)
- [Endpoints](#endpoints)
- [Resources](#resources)


## Project implementation summary

This project was implemented using the next tools or libraries:

- NestJs, TypeORM, MySQL and Docker.


## Running the project 

### Requirements

- Docker Engine version `27.2.0` or similar. If you don't have it installed, you can see instructions [here](https://docs.docker.com/engine/install/).
- Docker Compose version `2.29.2` or similar. If you don't have it installed, you can see instructions [here](https://docs.docker.com/compose/install/).

### Project setup

```bash
$ npm install
```

## Instructions for running database migration

**IMPORTANT:** The next commands must be executed on root project directory.

1. Start database:

    ```bash
    $ docker compose up
    ```

2. Compile and run the project

   ```bash
   # watch mode
   $ npm run start:dev
   ```
    
4. Run the database migration:

    ```bash
    $ npm run migrations:run
    ```

5. Generate database migration if needed:

    ```bash
    $ npm run migrations:gen
    ```

6. Revert database migration if needed:

    ```bash
    $ npm run migrations:revert
    ```

## Endpoints
### cURL commands
  
  ```bash
  # Get all tasks
  curl --location --request GET 'http://127.0.0.1:3000/tasks

  # Get task by ID
  curl --location --request GET 'http://127.0.0.1:3000/tasks/[id_number]

  # Create a new task
  curl --location --request POST 'http://127.0.0.1:3000/tasks

  # Update task details by ID
  curl --location --request PUT 'http://127.0.0.1:3000/tasks/[id_number]

  # Delete a task by ID
  curl --location --request DELETE 'http://127.0.0.1:3000/tasks/[id_number]

  # Update task status ID
  curl --location --request PATCH 'http://127.0.0.1:3000/tasks/[id_number]
  ```

  


## Resources

- `https://docs.nestjs.com/techniques/database`
- `https://typeorm.io/migrations`

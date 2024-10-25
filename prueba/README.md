# Wizzer Backend Challenge

- [Project implementation summary](#project-implementation-summary)
- [Running the project](#Running-the-project)
  - [Requirements](#requirements)
  - [Project setup](#project-setup)
- [Compile and run the project](#compile-and-run-the-project)
- [Instructions for running Database migration](#instructions-for-running-Database-migration)


## Project implementation summary

This project was implemented using the next tools or libraries:

- NestJs, TypeORM, MySQL and Docker.


## Running the project 

### Requirements

- Docker Engine version `27.2.0` or similar. If you don't have it installed, you can see instructions [here](https://docs.docker.com/engine/install/).
- Docker Compose version `2.29.2` or similar. If you don't have it installed, you can see instructions [here](https://docs.docker.com/compose/install/).

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Instructions for running Database migration

**IMPORTANT:** The next commands must be executed on root project directory.

- Execute database and server:

    ```bash
    docker-compose up
    ```
    
- Run the database migration:

    ```bash
    npm run migrations:run
    ```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

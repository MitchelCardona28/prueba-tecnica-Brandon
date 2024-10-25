import { DataSource, DataSourceOptions } from "typeorm"
import "dotenv/config"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    "./entities/*.{ts,js}"
  ],
  migrations: [
    "./migrations/*.{ts,js}"
  ],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/database/entities',
  },
  synchronize: true
} as DataSourceOptions )

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTable1729806708700 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "notes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid"
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "taskId",
            type: "int",
            foreignKeyConstraintName: "task_notes_id"
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task")
  }
}

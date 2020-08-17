import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateAllMigrations1597662765911
  implements MigrationInterface {
  name = 'CreateAllMigrations1597662765911';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dogs" ADD "description" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "dogs" DROP COLUMN "description"`);
  }
}

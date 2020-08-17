import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateAllMigrations1597666331073
  implements MigrationInterface {
  name = 'CreateAllMigrations1597666331073';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "photos" ADD "user_id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "photos" ADD CONSTRAINT "FK_c4404a2ee605249b508c623e68f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photos" DROP CONSTRAINT "FK_c4404a2ee605249b508c623e68f"`,
    );
    await queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "photos" ADD "user_id" character varying NOT NULL`,
    );
  }
}

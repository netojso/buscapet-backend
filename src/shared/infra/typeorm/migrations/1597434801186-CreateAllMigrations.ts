import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateAllMigrations1597434801186
  implements MigrationInterface {
  name = 'CreateAllMigrations1597434801186';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photos" ADD "user_id" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "photos" ADD "dog_id" uuid NOT NULL`);
    await queryRunner.query(`ALTER TABLE "dogs" ADD "user_id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_956434dfd305a85d14dc92efb23"`,
    );
    await queryRunner.query(
      `ALTER TABLE "photos" ADD CONSTRAINT "FK_fd4072ae49fdff1c34a02c2aaa4" FOREIGN KEY ("dog_id") REFERENCES "dogs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "dogs" ADD CONSTRAINT "FK_f7e92c9d922a3fd99ee72b68744" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dogs" DROP CONSTRAINT "FK_f7e92c9d922a3fd99ee72b68744"`,
    );
    await queryRunner.query(
      `ALTER TABLE "photos" DROP CONSTRAINT "FK_fd4072ae49fdff1c34a02c2aaa4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_956434dfd305a85d14dc92efb23" UNIQUE ("whatsapp")`,
    );
    await queryRunner.query(`ALTER TABLE "dogs" DROP COLUMN "user_id"`);
    await queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "dog_id"`);
    await queryRunner.query(`ALTER TABLE "photos" DROP COLUMN "user_id"`);
  }
}

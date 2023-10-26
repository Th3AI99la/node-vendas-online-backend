import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1698276172196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query;
    {
      `
            CREATE TABLE public.user (
            id INTEGER NOT NULL,
            name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            cpf VARCHAR NOT NULL,
            typeUser INTEGER NOT NULL,
            phone VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            createdAt timestamp without time zone DEFAULT NOW() NOT NULL,
            updatedAt timestamp without time zone DEFAULT NOW() NOT NULL,
            primary key (id)
);

        CREATE SEQUENCE public.user_id_seq

            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE 
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.user_id_seq OWNED BY public.user_id_seq;

        ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);
    

       `;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query;
    {
      `
        DROP TABLE public.user;
      `;
    }
  }
}

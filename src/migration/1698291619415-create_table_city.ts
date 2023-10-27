import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1698291619415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`

    CREATE TABLE public.city (
        id INTEGER NOT NULL,
        state_id INTEGER NOT NULL,
        name VARCHAR NOT NULL,
        createdat timestamp without time zone DEFAULT NOW() NOT NULL,
        updatedat timestamp without time zone DEFAULT NOW() NOT NULL,
        primary key (id),
        foreign key (state_id) references public.state(id)
);

   CREATE SEQUENCE public.city_id_seq
        AS integer
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE 
        NO MAXVALUE
        CACHE 1;

    ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;

    ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);

      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.city
     
      `);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1698291605769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`

    CREATE TABLE public.state (
        id INTEGER NOT NULL,
	    name VARCHAR NOT NULL,
	    createdat timestamp without time zone DEFAULT NOW() NOT NULL,
        updatedat timestamp without time zone DEFAULT NOW() NOT NULL,
	    primary key (id)
);

   CREATE SEQUENCE public.state_id_seq

        AS integer
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE 
        NO MAXVALUE
        CACHE 1;

    ALTER SEQUENCE public.state_id_seq OWNED BY public.state.Id;

    ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);
     
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.state 
     
      `);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1698291635980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
     
    CREATE TABLE public.address (
        id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        complement VARCHAR NOT NULL,
        number INTEGER NOT NULL,
        cep VARCHAR NOT NULL,
        city_id INTEGER NOT NULL,
        createdat timestamp without time zone DEFAULT NOW() NOT NULL,
        updatedat timestamp without time zone DEFAULT NOW() NOT NULL,
        primary key (id),
        foreign key (user_id) references public.user(id),
        foreign key (city_id) references public.city(id)


);

   CREATE SEQUENCE public.address_id_seq
        AS integer
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE 
        NO MAXVALUE
        CACHE 1;

    ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;

    ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
		

     
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
     
     
     
      `);
  }
}

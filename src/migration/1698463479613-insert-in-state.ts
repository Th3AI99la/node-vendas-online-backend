import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInState1698463479613 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Acre
        INSERT INTO state("id", "name", "uf") VALUES (1, 'Acre', 'AC');

        -- Alagoas
        INSERT INTO state("id", "name", "uf") VALUES (2, 'Alagoas', 'AL');

        -- Amapá
        INSERT INTO state("id", "name", "uf") VALUES (3, 'Amapá', 'AP');

        -- Amazonas
        INSERT INTO state("id", "name", "uf") VALUES (4, 'Amazonas', 'AM');

        -- Bahia
        INSERT INTO state("id", "name", "uf") VALUES (5, 'Bahia', 'BA');

        -- Ceará
        INSERT INTO state("id", "name", "uf") VALUES (6, 'Ceará', 'CE');

        -- Distrito Federal
        INSERT INTO state("id", "name", "uf") VALUES (7, 'Distrito Federal', 'DF');

        -- Espírito Santo
        INSERT INTO state("id", "name", "uf") VALUES (8, 'Espírito Santo', 'ES');

        -- Goiás
        INSERT INTO state("id", "name", "uf") VALUES (9, 'Goiás', 'GO');

        -- Maranhão
        INSERT INTO state("id", "name", "uf") VALUES (10, 'Maranhão', 'MA');

        -- Mato Grosso
        INSERT INTO state("id", "name", "uf") VALUES (11, 'Mato Grosso', 'MT');

        -- Mato Grosso do Sul
        INSERT INTO state("id", "name", "uf") VALUES (12, 'Mato Grosso do Sul', 'MS');

        -- Minas Gerais
        INSERT INTO state("id", "name", "uf") VALUES (13, 'Minas Gerais', 'MG');

        -- Pará
        INSERT INTO state("id", "name", "uf") VALUES (14, 'Pará', 'PA');

        -- Paraíba
        INSERT INTO state("id", "name", "uf") VALUES (15, 'Paraíba', 'PB');

        -- Paraná
        INSERT INTO state("id", "name", "uf") VALUES (16, 'Paraná', 'PR');

        -- Pernambuco
        INSERT INTO state("id", "name", "uf") VALUES (17, 'Pernambuco', 'PE');

        -- Piauí
        INSERT INTO state("id", "name", "uf") VALUES (18, 'Piauí', 'PI');

        -- Rio de Janeiro
        INSERT INTO state("id", "name", "uf") VALUES (19, 'Rio de Janeiro', 'RJ');

        -- Rio Grande do Norte
        INSERT INTO state("id", "name", "uf") VALUES (20, 'Rio Grande do Norte', 'RN');

        -- Rio Grande do Sul
        INSERT INTO state("id", "name", "uf") VALUES (21, 'Rio Grande do Sul', 'RS');

        -- Rondônia
        INSERT INTO state("id", "name", "uf") VALUES (22, 'Rondônia', 'RO');

        -- Roraima
        INSERT INTO state("id", "name", "uf") VALUES (23, 'Roraima', 'RR');

        -- Santa Catarina
        INSERT INTO state("id", "name", "uf") VALUES (24, 'Santa Catarina', 'SC');

        -- São Paulo
        INSERT INTO state("id", "name", "uf") VALUES (25, 'São Paulo', 'SP');

        -- Sergipe
        INSERT INTO state("id", "name", "uf") VALUES (26, 'Sergipe', 'SE');

        -- Tocantins
        INSERT INTO state("id", "name", "uf") VALUES (27, 'Tocantins', 'TO');

      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public.state;
     
      `);
  }
}

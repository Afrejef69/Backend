import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'maglev.proxy.rlwy.net',
  port: 5432,
  username: 'postgres',
  password: 'MPyyhVyOkMTdSTeHCnfxkkETYuIDMkVd',
  database: 'railway',
  synchronize: false,
  entities: ['src/**/*.entity{.ts, .js}'],
  migrations: ['./src/migrations/*.ts'],
});

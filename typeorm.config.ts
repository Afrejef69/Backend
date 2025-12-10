import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-d4sgcbfpm1nc73c24teg-a.virginia-postgres.render.com',
  port: 5432,
  username: 'user',
  password: 'CdjZuaXUIAgNQuMPu57ZDdpaszkmNaVR',
  database: 'test_1dh3',
  synchronize: false,
  entities: ['src/**/*.entity{.ts, .js}'],
  migrations: ['./src/migrations/*.ts'],
});

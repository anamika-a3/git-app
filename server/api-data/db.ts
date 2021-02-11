import { Pool } from 'pg';

const pool = new Pool({
user:'postgres',
host:'localhost',
password:'Winner@19',
database:'api-data',
port:5432
})
export default pool

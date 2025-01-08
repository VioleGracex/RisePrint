import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // You'll need to add this variable in .env.local
});

export default pool;

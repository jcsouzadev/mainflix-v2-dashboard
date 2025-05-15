
import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { BaseSap } from '@/types/baseSap';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || '0.0.0.0',
  database: process.env.DB_NAME || 'mainflix_v2',
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

export async function GET() {
  try {
    const result = await pool.query<BaseSap>('SELECT * FROM base_sap LIMIT 100');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return new NextResponse('Erro ao buscar dados do banco de dados', { status: 500 });
  }
}

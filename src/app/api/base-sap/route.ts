import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { BaseSap } from '@/types/baseSap';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mainflix_v2',
  password: '1w3e5tYU',
  port: 5432,
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

import { NextRequest, NextResponse } from 'next/server';
import { db } from '../conection';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = parseInt(searchParams.get('id') ?? '');

    if (isNaN(userId)) {
      return NextResponse.json({ message: 'ID invalido' }, { status: 400 });
    }

    const rows = await db.query('SELECT * FROM usuario WHERE id = ?', [userId]);

    if (rows.length > 0) {
      return NextResponse.json(rows[0], { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'Usuario não encontrado' },
        { status: 404 },
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 },
    );
  }
}

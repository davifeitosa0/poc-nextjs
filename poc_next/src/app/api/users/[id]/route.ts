import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../conection';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextRequest, {params}: {params: {id: number}}) {
  try {
    const userId = params.id;
  
    if (!userId || isNaN(userId)) {
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
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro no servidor', error: (error as Error).message },
      { status: 500 },
    );
  }
}
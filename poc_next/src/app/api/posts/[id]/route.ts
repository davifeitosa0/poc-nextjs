import { json } from 'stream/consumers';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../conection';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const userId = params.id;
  try {
    if (!userId || isNaN(userId)) {
      return NextResponse.json({
        status: 400,
        json: { message: 'ID invalido' },
      });
    }

    const verifyUser = await db
      .query('SELECT COUNT(*) from usuario where id = ?', userId)
      .then(([result]) => result[0]['COUNT(*)']);

    console.log(verifyUser);

    if (verifyUser == 0) {
      return NextResponse.json(
        { message: 'Usuário não encontrado' },
        { status: 404 },
      );
    }
    const rows = await db.query(
      'SELECT * FROM post JOIN usuario  ON usuario.id = post.fk_usuario WHERE fk_usuario = ?',
      [userId],
    );

    if (rows.length > 0) {
      return NextResponse.json(rows, { status: 200 });
    } else {
      return NextResponse.json({
        status: 204,
        json: { message: 'Posts não encontrado' },
      });
    }
  } catch (e) {
    console.error('Erro ao buscar posts:', e);
    return NextResponse.json({ message: 'Erro no servidor' }, { status: 500 });
  }
}

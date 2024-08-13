import { NextResponse } from 'next/server';
import { db } from '../conection';

export async function GET() {
    const rows = await db.query('SELECT * FROM post JOIN usuario ON usuario.id = post.fk_usuario');

    if (rows.length > 0) {
      return NextResponse.json( rows, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'Usuario não encontrado' },
        { status: 404 },
      );
    }

}

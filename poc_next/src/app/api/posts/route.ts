import { NextResponse } from 'next/server';
import { db } from '../conection';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET() {
  const rows = await db.query(
    'SELECT * FROM post JOIN usuario ON usuario.id = post.fk_usuario ORDER BY post.id DESC',
  );

  if (rows.length > 0) {
    return NextResponse.json(rows, { status: 200 });
  } else {
    return NextResponse.json(
      { message: 'Usuario não encontrado' },
      { status: 404 },
    );
  }
}

export async function POST(req: Request, res: NextResponse) {
  const { texto, fk_usuario }: { texto: string; fk_usuario: number } =
    await req.json();


  if (texto?.trim() === '' || !fk_usuario) {
    return NextResponse.json(
      { message: 'Campos obrigatórios' },
      { status: 400 },
    );
  }

  const rows = await db.query(
    'INSERT INTO post (texto, fk_usuario) VALUES (?, ?)',
    [texto, fk_usuario],
  );

  return NextResponse.json(rows, { status: 201 });
}

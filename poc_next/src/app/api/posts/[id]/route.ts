import { NextRequest } from "next/server";

export default function GET (req: NextRequest, {params}: {params: {id: number}}) {
    return {
        status: 200,
        body: `Post ${params.id}`,
    };
}
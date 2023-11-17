import type { NextRequest } from "next/server";

import prisma from "@/db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  
  const data = await prisma.course.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      students: true,
    },
  });
 
  return Response.json(data);
}

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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  const {
    name,
    classroom,
    capacity,
    teacher,
    description,
    active,
    students,
  } = await req.json();

  const data = await prisma.course.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      classroom,
      capacity,
      teacher,
      description,
      active,
      students: {
        connect: students
      },
    },
    include: {
      students: true,
    },
  });
  
 
  return Response.json(data);
}

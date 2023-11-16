import { type NextRequest } from 'next/server';

import prisma from "@/db/db";

export async function POST(req: NextRequest) {
  const {
    name,
    classroom,
    capacity,
    teacher,
    description,
    active,
    students,
  } = await req.json();

  const data = await prisma.course.create({
    data: {
      name,
      classroom,
      capacity,
      teacher,
      description,
      active,
      students: { connect: students },
    },
  });
 
  return Response.json(data);
};

export async function GET() {
  const data = await prisma.course.findMany();
 
  return Response.json(data);
};


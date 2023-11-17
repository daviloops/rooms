import prisma from "@/db";

export async function POST(req: Request) {
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


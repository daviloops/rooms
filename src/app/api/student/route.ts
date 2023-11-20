import prisma from "@/db";

export async function GET() {
  const data = await prisma.student.findMany();
 
  return Response.json(data)
}

export async function POST(req: Request) {
  const {
    name,
    email,
    age,
    gender,
    courses,
  } = await req.json();

  const data = await prisma.student.create({
    data: {
      name,
      email,
      age,
      gender,
      courses: { connect: courses },
    },
  });
 
  return Response.json(data);
};
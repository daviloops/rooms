import prisma from "@/db/db";

export async function GET() {
  const data = await prisma.student.findMany();
 
  return Response.json(data)
}
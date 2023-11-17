import prisma from "@/db";

export async function GET() {
  const data = await prisma.student.findMany();
 
  return Response.json(data)
}
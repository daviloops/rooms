export default function CourseDetails({ params }: { params: { id: string }}) {
  return (
    <div>course: {params.id}</div>
  );
};

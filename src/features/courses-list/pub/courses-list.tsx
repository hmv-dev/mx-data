import { revalidatePath } from "next/cache";
import { courseRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await courseRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";
    await courseRepository.deleteCourseElement({ id: courseId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}

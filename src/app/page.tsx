// import { PrismaClient } from "@/generated/prisma";
// import { Button } from "@/shared/ui/button";
// import styles from "./page.module.css";
import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

// const client = new PrismaClient();

export default async function Home() {
  // const courses = await client.course.findMany();

  return (
    <main className="flex min-h-screen flex-col !p-5">
      <h1>Courses</h1>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] !mb-5"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}

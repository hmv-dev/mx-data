import { dbClient } from '@/shared/lib/db';
import { cache } from 'react';

class CourseRepository {

  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany()
  );

  createCourseElement = (command: CreateCourseListElementCommand): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: {
        name: command.name,
        description: command.description
      }
    })
  }

  deleteCourseElement = (command: DeleteCourseListElementCommand) => {
    return dbClient.course.delete({
      where: {
        id: command.id
      }
    })
  }
}

export const courseRepository = new CourseRepository();

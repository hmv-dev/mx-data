/* eslint-disable @typescript-eslint/no-unused-vars */
type CourseListElement = {
  id: string;
  name: string;
  description: string;
}

type CreateCourseListElementCommand = {
  name: string;
  description: string;
}

type DeleteCourseListElementCommand = {
  id: string;
}

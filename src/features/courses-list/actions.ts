'use server';

import { revalidatePath } from 'next/cache';
import { courseRepository } from './courses.repository';

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await courseRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
}

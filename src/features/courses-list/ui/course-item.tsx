"use client";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";

export function CourseItem({
  course,
  onDelete,
}: {
  course: CourseListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card className="!p-2">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button
          disabled={isLoadingDelete}
          onClick={handleDelete}
          className="!p-5 cursor-pointer bg-orange-900"
        >
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}

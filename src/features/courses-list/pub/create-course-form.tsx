"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createCourseAction } from "../actions";

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  revalidatePagePath: string;
  className: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction(data, revalidatePagePath);
          });
        })}
        className={cn(className, "!space-y-8")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="название..." {...field} className="!p-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="описание..."
                  {...field}
                  className="!p-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isCreateTransition}
          className="!p-5 cursor-pointer"
        >
          Добавить
        </Button>
      </form>
    </Form>
  );
}

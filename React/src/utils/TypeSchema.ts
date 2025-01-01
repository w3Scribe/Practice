import { z } from "zod";

type SchemaReturn<T extends z.ZodRawShape> = {
  schema: z.ZodObject<T>;
  inferredType: z.infer<z.ZodObject<T>>;
};


export function defineSchema<T extends z.ZodRawShape>(shape: T): SchemaReturn<T> {
  return {
    schema: z.object(shape),
    inferredType: z.infer(z.object(shape)),
}


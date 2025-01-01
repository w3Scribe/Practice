import { z } from "zod";

type SchemaReturn<T extends z.ZodRawShape> = {
  schema: z.ZodObject<T>;
  UserType: z.infer<z.ZodObject<T>>;
};

export function defineSchema<T extends z.ZodRawShape>(shape: T): SchemaReturn<T> {
  const schema = z.object(shape);
  return {
    schema,
    UserType: schema.parse({} as any), // Adjust parsing as needed
  };
}

const UserSchema = defineSchema({
  username: z
    .string()
    .trim()
    .min(4, { message: "Username must be at least 4 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

// Usage example
// UserSchema.UserType can be used directly without an extra type definition

type zodSchemaInfereType = UserSchema.UserType;
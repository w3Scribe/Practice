import { zValidator } from "@hono/zod-validator";
import { password } from "bun";
import { Hono } from "hono";
import { z } from "zod";

const User = z.object({
  username: z.string().min(4).max(8),
  password: z.string().min(4).max(8),
});

const ValidInput = zValidator("json", User);
type UserType = z.infer<typeof User>;

const app = new Hono()
  .basePath("/")
  .get((c) => c.text("hello world"))
  .post(zValidator("json", User), (c: UserType) => {
    const { password, username } = c;
    return c;
  });

export default app;

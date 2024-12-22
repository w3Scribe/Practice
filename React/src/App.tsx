import { zodResolver } from "@hookform/resolvers/zod";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const App: FC = () => {
  const FromSchema = z.object({
    username: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(8),
  });

  type FormValues = z.infer<typeof FromSchema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(FromSchema),
  });

  const formSubmitHandlerFn = handleSubmit((data) => {
    console.log("Form Submitted", data);
  });

  const FromActionFn = (data: FormData) => {
    const newUseData: FormValues | unknown = {
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
    };
    console.log(newUseData);
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-800">
      <form
        className="flex flex-col gap-4 p-4 max-w-2xs"
        onSubmit={formSubmitHandlerFn}
        action={FromActionFn}
      >
        <div className="flex flex-col">
          <label className="mb-1 text-white" htmlFor="username">
            Username
          </label>
          <input
            className="px-2 py-1 rounded border border-gray-300"
            type="text"
            id="username"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-white" htmlFor="email">
            Email
          </label>
          <input
            className="px-2 py-1 rounded border border-gray-300"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-white" htmlFor="password">
            Password
          </label>
          <input
            className="px-2 py-1 rounded border border-gray-300"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default App;

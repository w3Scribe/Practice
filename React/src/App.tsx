import { useForm } from "@tanstack/react-form";
import { type FC } from "react";
import { z } from "zod";
import FormField from "./components/FormField"; // Correct import for FormField
import { twc } from "./utils";
import { FormSubmitFn } from "./utils/formSubFn";

const style = twc({
  container: "max-w-full h-lvh bg-gray-100 grid place-items-center",
  input: "p-2 m-2 border border-gray-300 rounded-md",
  button:
    "p-2 m-2 bg-blue-500 text-white rounded-md cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed",
});

const UserSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, { message: "Username must be at least 4 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

type TUserDetails = z.infer<typeof UserSchema>;

const App: FC = () => {
  const FORM = useForm<TUserDetails>({
    defaultValues: {
      username: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: UserSchema,
    },
  });

  return (
    <section className={style.container}>
      <form onSubmit={(e) => FormSubmitFn(e, FORM)}>
        <FormField
          Form={FORM}
          Name="username" // why i am not getting any suggestion for Name prop here?
          Tag="input"
          className={style.input}
        />
        <FormField
          Form={FORM}
          Name="email"
          Tag="input"
          className={style.input}
        />
        <button
          type="submit"
          className={style.button}
          disabled={!FORM.state.isFormValid || FORM.state.isSubmitting}
        >
          {FORM.state.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default App;

import { useForm } from "@tanstack/react-form";
import { type FC } from "react";
import { z } from "zod";
import FormField from './components/FieldInfo';
import { twc } from "./utils";
import { FormSubmitFn } from './utils/formSubFn';

const style = twc({
  container: "max-w-full h-lvh bg-gray-100 grid place-items-center",
  input: "p-2 m-2 border border-gray-300 rounded-md",
  button: "p-2 m-2 bg-blue-500 text-white rounded-md cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed",
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
  const Form = useForm<TUserDetails>({
    defaultValues: {
      username: "sd",
      email: "sdf",
    },
    onSubmit: async ({value}) => {
      console.log(value);
    },

    validators: {
      onChange: UserSchema,
    },
  });


  return (
    <section className={style.container}>
      <form onSubmit={(e) => FormSubmitFn(e, Form)}>
        <Form.Field
          name="username"
          children={(inpt) => (
            <div>
              <input
                name={inpt.name}
                value={inpt.state.value}
                placeholder={inpt.name}
                className={style.input}
                onBlur={inpt.handleBlur}
                onChange={(e) => inpt.handleChange(e.target.value)}
              />
              <FormField field={inpt} />
            </div>
          )}
        />
 
        <button type="submit" className={style.button} disabled={Form.state.isFormValid}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default App;

import { FieldApi, useForm } from "@tanstack/react-form";
import { FormEvent, type FC } from "react";
import { z } from "zod";
import { twc } from "./utils";

const style = twc({
  container: "max-w-full h-lvh bg-gray-100 grid place-items-center",
  input: "p-2 m-2 border border-gray-300 rounded-md",
  button: "p-2 m-2 bg-blue-500 text-white rounded-md",
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

interface IFieldInfo {
  field: FieldApi<any, any, any, any>;
}

const FieldInfo: FC<IFieldInfo> = ({ field }) => {
  const {
    state: {
      meta: { errors, isValidating },
    },
  } = field;
  return (
    <div>
      {isValidating && <div>Checking...</div>}
      {errors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
    </div>
  );
};

const App: FC = () => {
  const Form = useForm<TUserDetails>({
    defaultValues: {
      username: "",
      email: "",
    },

    onSubmit: async (formData) => {
      console.log(formData);
    },

    validators: {
      onChange: UserSchema,
    },
  });

  function FromSubmitFn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    Form.handleSubmit();
  }

  return (
    <section className={style.container}>
      <form onSubmit={(e) => FromSubmitFn(e)}>
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
              <FieldInfo field={inpt} />
            </div>
          )}
        />
        <Form.Field
          name="email"
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
              <FieldInfo field={inpt} />
            </div>
          )}
        />

        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default App;

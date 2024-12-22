import { zodResolver } from "@hookform/resolvers/zod";
import React, { type FC, Fragment } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import twc from "./lib/twc";

const style = twc({
  section: "bg-gray-900 min-w-full min-h-dvh grid place-items-center",
  form: "w-60 p-4 bg-gray-800 border border-gray-700 rounded-sm flex flex-col justify-center gap-y-3",
  formHeading: "text-center text-gray-50 font-bold mb-2 text-xl",
  input:
    "w-full py-1.5 px-1 bg-gray-600/40 outline-none border border-gray-500 text-gray-50",
});

const FormSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters"),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});

type FromInputs = z.infer<typeof FormSchema>;

const App: FC = () => {
  const FromHook = useForm<FromInputs>({
    resolver: zodResolver(FormSchema),
  });

  const submitFn = FromHook.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Fragment>
      <section className={style.section}>
        <form className={style.form} onChange={submitFn}>
          <h1 className={style.formHeading}>Login Form</h1>
          <Input form={FromHook} fieldName="username" className={style.input} />
          <Input
            form={FromHook}
            fieldName="password"
            type="password"
            className={style.input}
          />
          <button
            type="submit"
            className={style.input + " bg-blue-500 hover:bg-blue-600 my-2"}
          >
            Submit
          </button>
        </form>
      </section>
    </Fragment>
  );
};

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  form: UseFormReturn<FromInputs>;
  fieldName: keyof FromInputs;
}
const Input: FC<InputProps> = (props) => {
  const { form, fieldName, className, type, id, placeholder } = props;
  const { register, formState } = form;
  return (
    <div>
      <input
        type={type ?? "text"}
        className={className}
        id={id}
        placeholder={placeholder}
        {...register(fieldName)}
      />
      {formState.errors[fieldName] && (
        <span className=" top-0 right-0 text-xs text-red-500">
          {formState.errors[fieldName]?.message}{" "}
        </span>
      )}
    </div>
  );
};

export default App;

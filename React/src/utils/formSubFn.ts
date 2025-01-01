import { ReactFormExtendedApi } from "@tanstack/react-form";

type TFormSubmitFn = <T>(
  event: React.FormEvent<HTMLFormElement>,
  form: ReactFormExtendedApi<T>
) => void;

export const FormSubmitFn: TFormSubmitFn = (event, form) => {
  event.preventDefault();
  event.stopPropagation();
  form.handleSubmit();
};

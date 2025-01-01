import { DeepKeys, ReactFormExtendedApi } from "@tanstack/react-form";
import { Fragment, JSX } from "react";
import FieldInfo from "./FieldInfo";

interface FormFieldProps<TData extends object> {
  Tag: keyof JSX.IntrinsicElements;
  Form: ReactFormExtendedApi<any>;
  Name: DeepKeys<TData>;
  [key: string]: unknown; // For additional HTML attributes (like className, etc.)
}

function FormField<TData extends object>({
  Tag,
  Form,
  Name,
  ...attr
}: FormFieldProps<TData>) {
  return (
    <Form.Field
      name={Name}
      children={(FormElement) => (
        <Fragment>
          <Tag
            {...attr}
            name={FormElement.name}
            placeholder={FormElement.name}
            aria-placeholder={FormElement.name}
            value={FormElement.state.value}
            onBlur={FormElement.handleBlur}
            onChange={(e) => FormElement.handleChange((e.target as HTMLInputElement).value)}
          />
          {/* The FieldInfo component is defined in [src/components/FieldInfo.tsx](src/components/FieldInfo.tsx) */}
          <FieldInfo field={FormElement} />
        </Fragment>
      )}
    />
  );
}

export default FormField;

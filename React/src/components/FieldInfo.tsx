import { FieldApi } from "@tanstack/react-form";
import { type FC, Fragment } from "react";

interface IFieldInfo {
  field: FieldApi<any, any>;
}

const FieldInfo: FC<IFieldInfo> = ({ field }) => {
  const { errors, isValidating } = field.state.meta;
  return (
    <Fragment>
      {isValidating && <span>Checking...</span>}
      {errors.map((error, index) => (
        <span key={index}>{error}</span>
      ))}
    </Fragment>
  );
};

export default FieldInfo;

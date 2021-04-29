import React from "react";
import { Switch } from "@material-ui/core";
import { Field } from "formik";

const FormSwitch = ({name, ...rest}) => {
  return (
    <Field name={name}>{({ field, form }) => (
      <Switch
        {...rest}
        checked={field.value}
        value={field.value}
        id={`${name}-switch`}
        onChange={({target}) => form.setFieldValue(name, target.checked)}
        size="small"
      />
    )}</Field>
  );
}

export default FormSwitch;

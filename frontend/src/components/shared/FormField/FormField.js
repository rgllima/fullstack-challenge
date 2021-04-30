import React from "react";
import { Field } from "formik";
import { makeStyles, TextField } from "@material-ui/core";
import formFieldStyles from "./Styles";

const useStyles = makeStyles((theme) => formFieldStyles(theme));

const FormField = ({ name, mask = { exec: value => value }, ...rest }) => {
  const classes = useStyles();

  return (
    <Field name={name}>{({ field, form }) => (
      <TextField
        {...rest}
        error={form.errors[name]}
        helperText={form.errors[name]}
        className={classes.textField}
        id={name}
        value={field.value}
        onChange={({ target }) => form.setFieldValue(name, mask.exec(target.value))}
      />
    )}</Field>
  );
}

export default FormField

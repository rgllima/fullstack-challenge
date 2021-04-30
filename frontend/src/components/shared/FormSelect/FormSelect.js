import React from "react";
import { Field } from "formik";
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import formSelectStyles from "./Styles";

const useStyles = makeStyles((theme) => formSelectStyles(theme));

const FormSelect = ({ name, options = [], ...rest }) => {
  const classes = useStyles();

  const buildOptions = () => options.map(({ id, description}) => (
    <MenuItem value={id} key={id}>
      {description}
    </MenuItem>
  ))

  return (
    <Field name={name}>{({ field, form }) => (
      <FormControl variant="filled" fullWidth className={classes.formControl}>
        <InputLabel id={`select-${name}-id`}>{rest.label}</InputLabel>
        <Select
          {...rest}
          labelId={`select-${name}-id`}
          id={`select-${name}`}
          value={field.value}
          onChange={({ target }) => form.setFieldValue(name, target.value)}
        >
          {buildOptions()}
        </Select>
      </FormControl>
    )}</Field>
  );
}

export default FormSelect

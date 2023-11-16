'use client';

import { Controller } from "react-hook-form";

import Input, { InputProps as JoyInputProps } from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";

export interface InputProps extends JoyInputProps {
  label?: string
  required?: boolean
};

export interface ControlledInputProps extends InputProps {
  name: string
  control: any
  errors?: any
};

const ControlledInput = (props: ControlledInputProps) => {
  const {
    errors = {},
    control,
    placeholder,
    type = "text",
    name = "",
    label = "",
    required = false,
    ...rest
  } = props;

  return (
    <FormControl error={!!errors[name]} required={required}>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input {...field} type={type} placeholder={placeholder} {...rest} />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledInput.displayName = "ControlledInput";

export default ControlledInput;

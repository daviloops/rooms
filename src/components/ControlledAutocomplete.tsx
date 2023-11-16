'use client';

import { Controller } from "react-hook-form";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Autocomplete, { AutocompleteProps as JoyAutocompleteProps } from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';

type T = string | object
type Multiple = boolean
type DisableClearable = boolean
type FreeSolo = boolean

export interface AutocompleteProps extends JoyAutocompleteProps<T, Multiple,  DisableClearable,  FreeSolo>{
  label?: string
};

export interface ControlledAutocompleteProps extends AutocompleteProps {
  name: string
  control: any
  errors?: any
};

const ControlledAutocomplete = (props: ControlledAutocompleteProps) => {
  const {
    errors = {},
    control,
    name = "",
    label = "",
    loading,
    ...rest
  } = props;

  return (
    <FormControl error={!!errors[name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, ...field }) => (
          <Autocomplete
            {...field}
            endDecorator={
              loading ? (
                <CircularProgress
                  color="neutral"
                  size="sm"
                  sx={{
                    bgcolor: 'background.surface'
                  }}
                />
              ) : null
            }
            value={value}
            onChange={(_, data) => onChange(data)}
            {...rest}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledAutocomplete.displayName ="ControlledAutocomplete";

export default ControlledAutocomplete;

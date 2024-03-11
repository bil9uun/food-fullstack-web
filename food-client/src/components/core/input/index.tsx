"use client";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  name?: string;
  label: string;
  value?: string;
  errorText?: string | undefined;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  desc?: string;
}

const Input = ({
  label,
  value,
  showPassword = false,
  onChange,
  errorText,
  name,
  desc,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <FormControl sx={{ my: "1rem" }} variant="outlined" fullWidth>
      <Stack spacing={1}>
        <FormLabel sx={{ my: "4px", color: "black" }}>{label}</FormLabel>
        <OutlinedInput
          value={value}
          name={name}
          onChange={onChange}
          sx={{ backgroundColor: "#ECEDF0" }}
          placeholder={desc}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </Stack>
      <FormHelperText error={errorText ? true : false}>
        {errorText}
      </FormHelperText>
    </FormControl>
  );
};

export default Input;

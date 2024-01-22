"use client";
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  label: string;
  value?: any;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  showPassword = false,
  onChange,
  value,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <FormControl sx={{ my: "1rem" }} variant="outlined" fullWidth>
      <Stack spacing={1}>
        <FormLabel sx={{ my: "4px", color: "black" }}>{label}</FormLabel>
        <OutlinedInput
          sx={{ backgroundColor: "#ECEDF0" }}
          placeholder={label}
          type={isShowPassword ? "password" : "text"}
          value={value}
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
    </FormControl>
  );
};

export default Input;

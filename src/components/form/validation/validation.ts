/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resolver } from "react-hook-form";

export type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type FormProps = {
  isLogin: boolean;
};
const resolver: Resolver<FormValues> = async (values, context) => {
  const errors: Record<string, any> = {};

  if (!context.isLogin && !values.name && values.name === "") {
    errors.name = {
      type: "required",
      message: "This is required.",
    };
  }

  if (!values.email && values.email === "") {
    errors.email = {
      type: "required",
      message: "This is required.",
    };
  }

  if (!values.password && values.password === "") {
    errors.password = {
      type: "required",
      message: "This is required.",
    };
  }

  if (
    !context.isLogin &&
    !values.passwordConfirm &&
    values.passwordConfirm === ""
  ) {
    errors.passwordConfirm = {
      type: "required",
      message: "This is required.",
    };
  }

  if (!context.isLogin && values.password !== values.passwordConfirm) {
    errors.passwordConfirm = {
      type: "validate",
      message: "Passwords do not match.",
    };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors: errors,
  };
};
export default resolver;

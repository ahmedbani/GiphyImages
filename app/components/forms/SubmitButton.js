import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";


export default function SubmitButton({ title, onSubmit }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} onSubmit= {onSubmit}/>;
}


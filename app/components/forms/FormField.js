import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import { Text } from "react-native";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      {touched[name] && <Text>{errors[name]}</Text>}
    </>
  );
}

export default AppFormField;

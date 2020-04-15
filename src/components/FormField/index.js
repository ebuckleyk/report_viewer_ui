import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const FormField = ({errorMsg, error, formStyle, ...restProps}) => {
  return (
    <View style={[styles.formField, formStyle]}>
      <TextInput {...restProps} />
      <HelperText type='error' visible={error}>
        {errorMsg}
      </HelperText>
    </View>
  )
}

export default React.memo(FormField);

const styles = StyleSheet.create({
  formField: {
    padding: 5
  }
})
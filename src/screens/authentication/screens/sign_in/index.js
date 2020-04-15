import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import { Surface, Title, Button, Snackbar } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { withFormik } from 'formik';
import {isMobile} from '../../../../components/Responsive';
import FormField from '../../../../components/FormField';

const SignIn = ({values, touched, errors, handleChange, handleBlur, handleSubmit, validateForm, navigation, toggleMessage}) => {
  const valid_email = !!(errors.email && touched.email);
  const valid_password = !!(errors.password && touched.password);

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Surface style={[styles.form, Platform.OS === 'web' && isMobile() && {width: '100%'}]}>
        <Title>Sign in</Title>
        <FormField
          formStyle={styles.formField}
          label='Email'
          value={values.email}
          error={valid_email}
          errorMsg={errors.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          mode='flat'
        />
        <FormField
          formStyle={styles.formField}
          label='Password'
          value={values.password}
          error={valid_password}
          errorMsg={errors.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          mode='flat'
          textContentType='password'
          secureTextEntry={true}
        />
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button mode='outlined' onPress={handleSubmit}>Submit</Button>
        </View>
      </Surface>
    </KeyboardAvoidingView>
  )
}

export default withFormik({
  mapPropsToValues: () => (DEFAULT_STATE),
  mapPropsToErrors: () => (DEFAULT_STATE),
  mapPropsToTouched: () => (DEFAULT_STATE),
  handleSubmit: async (values, {setSubmitting, resetForm, props}) => {
    const {navigation, toggleMessage} = props;
    const {email, password} = values || {};
    console.log('props', props)

    try {
      const user = await Auth.signIn(email, password);
      navigation.navigate('Home');
    } catch (error) {
      const {code} = error;
      if (code === 'UserNotConfirmedException') {
        // show confirmation dialog
        toggleMessage(code);
      }
      else if (code === 'NotAuthorizedException') {
        // show confirmation dialog
        toggleMessage(code)
      }
      console.log('error', error);
    }
  }
})((props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  return (
    <React.Fragment>
      <SignIn {...props} toggleMessage={setMessage} />
      <Snackbar visible={isVisible} action={{
        label: 'Dismiss',
        onPress: () => setIsVisible(false)
      }}>
        {message}
      </Snackbar>
    </React.Fragment>
    )
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '100%'
  },
  form: {
    display: 'flex', 
    padding: 10,
    width: '100%',
    alignSelf: 'center',
    elevation: 6,
    ...Platform.select({
      web: {
        width: '50%'
      }
    })
  },
  formField: {
    flex: 1
  }
});

const DEFAULT_STATE = {
  email: '',
  password: ''
}
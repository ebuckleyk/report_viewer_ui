import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import {Button, Title, Surface, Snackbar} from 'react-native-paper';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import FormField from '../../../../components/FormField';
import {isMobile} from '../../../../components/Responsive';
import * as services from '../../../../services';

const SignUp = ({values, touched, errors, handleChange, handleBlur, handleSubmit, validateForm}) => {
  const valid_first_name = !!(errors.first_name && touched.first_name);
  const valid_last_name = !!(errors.last_name && touched.last_name);
  const valid_email = !!(errors.email && touched.email);
  const valid_password = !!(errors.password && touched.password);
  const valid_phone = !!(errors.phone && touched.phone);
  const valid_org_name = !!(errors.org_name && touched.org_name);
  const valid_org_addr = !!(errors.org_addr && touched.org_addr);
  const valid_org_addr_2 = !!(errors.org_addr_2 && touched.org_addr_2);
  console.log({values, touched, errors, validateForm})
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <Surface style={[styles.form, Platform.OS === 'web' && isMobile() && {width: '100%'}]}>
        <Title>Sign up</Title>
        <FormField
          formStyle={styles.formField}
          label='First Name'
          value={values.first_name}
          error={valid_first_name}
          errorMsg={errors.first_name}
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          mode='flat'
        />
        <FormField
          formStyle={styles.formField}
          label='Last Name'
          value={values.last_name}
          error={valid_last_name}
          errorMsg={errors.last_name}
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          mode='flat'
        />
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
          onBlur={handleChange('password')}
          mode='flat'
          textContentType='password'
          secureTextEntry={true}
        />
        <FormField
          formStyle={styles.formField}
          label='Phone'
          value={values.phone}
          error={valid_phone}
          errorMsg={errors.phone}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          mode='flat'
        />
        <FormField
          formStyle={styles.formField}
          label='Organization'
          value={values.org_name}
          error={valid_org_name}
          errorMsg={errors.org_name}
          onChangeText={handleChange('org_name')}
          onBlur={handleBlur('org_name')}
          mode='flat'
        />
        <FormField
          formStyle={styles.formField}
          label='Org. Address'
          value={values.org_addr}
          error={valid_org_addr}
          errorMsg={errors.org_addr}
          onChangeText={handleChange('org_addr')}
          onBlur={handleBlur('org_addr')}
          mode='flat'
        />
        <FormField
          formStyle={styles.formField}
          label='Org. Address Unit/Suite/Bldg'
          value={values.org_addr_2}
          error={valid_org_addr_2}
          errorMsg={errors.org_addr_2}
          onChangeText={handleChange('org_addr_2')}
          onBlur={handleBlur('org_addr_2')}
          mode='flat'
        />
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button
              icon='content-save'
              mode='outlined'
              onPress={handleSubmit}>
                Submit
            </Button>
        </View>
      </Surface>
    </KeyboardAvoidingView>
  )
}

export default withFormik({
  mapPropsToValues: () => (DEFAULT_STATE),
  mapPropsToErrors: () => (DEFAULT_STATE),
  mapPropsToTouched: () => (DEFAULT_STATE),
  validationSchema: SignupSchema,
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const {first_name, last_name, email, phone, password, org_name, org_addr, org_addr_2} = values || {};

    let attributes = {email, given_name: first_name, family_name: last_name};
    if (phone) {
      attributes = {...attributes, phone_number: `+1${phone}`}
    }
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes
      });
      // after sign in persist organizational info
      const org = await services.createOrganization(result.userSub, org_name, org_addr, org_addr_2, phone);

      // reset form
      resetForm(DEFAULT_STATE);
    }
    catch (err) {
      console.error({err})
    }
  },
})(SignUp);

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
})

const SignupSchema = Yup.object().shape({
  first_name: Yup.string().min(3, 'First name must be at least 3 characters').required(),
  last_name: Yup.string().min(3, 'Last name must be at least 3 characters').required(),
  email: Yup.string().email('Must be a valid email address'),
  password: Yup.string().min(8).required('Password is required'),
  phone: Yup.string().min(10, 'Invalid phone number'),
  org_name: Yup.string().min(5, 'Organization name should be at least 5 characters').required(),
  org_addr: Yup.string().min(5, 'Address must be at least 5 characters').nullable(),
  org_addr_2: Yup.string().nullable()
});

const DEFAULT_STATE = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: '',
  org_name: '',
  org_addr: '',
  org_addr_2: ''
};
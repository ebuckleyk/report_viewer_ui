import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Amplify, { Auth } from 'aws-amplify';
import Header from './src/components/header';
import Home from './src/screens/home';
import Dashboard from './src/screens/dashboard';
import Report from './src/screens/report';
import Authentication from './src/screens/authentication';

Amplify.configure({
  Auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-2_GtSWPot4f',
    userPoolWebClientId: '4632c3kc3tehhi8gf73cm3414k',
    oauth: {
      domain: 'https://report-viewer.auth.us-east-2.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:19006/callback',
      redirectSignOut: 'http://localhost:19006/sign-out',
      responseType: 'token'
    }
  }
});

const currentConfig = Auth.configure();

const RootStack = createStackNavigator();

export default function App() {
  const navigationRef = useRef();

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: [],
    config: {
      Home: {path: ''},
      Dashboard: {path: 'dashboard'},
      Report: {path: 'report/:reportId'},
      SignUp: {path: 'sign-up'},
      Authentication: {
        path: 'a', 
        screens: {
          SignUp: {path: 'a/sign-up'},
          SignIn: {path: 'a/sign-in'}
      }}
    }
  })

  useEffect(() => {
    getInitialState().then((state) => {
      if (state) setInitialState(state);
      setIsReady(true);
    })
  }, [getInitialState])

  if (!isReady) return null;
  return (
    <PaperProvider>
      <NavigationContainer initialState={initialState} ref={navigationRef}>
        <RootStack.Navigator screenOptions={{
          header: () => <Header />
        }}>
          <RootStack.Screen name='Home' component={Home} />
          <RootStack.Screen name='Dashboard' component={Dashboard} />
          <RootStack.Screen name='Report' component={Report} />
          <RootStack.Screen name='Authentication' component={Authentication} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

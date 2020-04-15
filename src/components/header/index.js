import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import {Auth} from 'aws-amplify';

const Header = () => {
  const navigation = useNavigation();
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  React.useEffect(() => {
    async function auth() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if(user) setIsSignedIn(true);
      } catch (error) {
        console.error({error})
        setIsSignedIn(false);
      }
    }
    auth();
  }, [Auth.user])

  return (
    <Appbar.Header>
      <Appbar.Content title='Demo Report Viewer' onPress={() => navigation.navigate('Home')}/>
      {!isSignedIn && (<Appbar.Action icon='pencil' onPress={() => navigation.navigate('Authentication', { screen: 'SignIn' })} />)}
      {isSignedIn && (<Appbar.Action icon='view-dashboard' onPress={() => navigation.navigate('Dashboard')} />)}
      {isSignedIn && (<Appbar.Action icon='account' onPress={() => console.log('account pressed')} />)}
    </Appbar.Header>
  )
}

export default Header;
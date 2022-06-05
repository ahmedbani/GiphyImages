import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { useMemo } from 'react';

import DetailsScreen from './app/screens/DetailsScreen.js';
import HomeScreen from './app/screens/HomeScreen.js';
import Store, { Persistor } from './app/modules/store.js';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import FavoritesScreen from './app/screens/FavoritesScreen.js';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { AuthContext } from './app/modules/context.js';
import defaultStyles from './app/components/config/styles.js';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen}/>
    <HomeStack.Screen name="Details" component={DetailsScreen}/>
  </HomeStack.Navigator>
)

const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name="Favorites" component={FavoritesScreen}/>
  </FavoritesStack.Navigator>
)
export default function App() {

  const [userToken, setUserToken] = useState(null);
  
  const authContext = useMemo(() => {
    return {
      signin: () => setUserToken('signedIn'),
      register: () => setUserToken('registered') 
    }
  },[])
  return (
    <AuthContext.Provider value={authContext}>
      <Provider store={Store} >
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer >
            { !userToken ? (
            <AuthStack.Navigator >
              <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
              <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
              <AuthStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
            </AuthStack.Navigator>
            ) : (
            <Tabs.Navigator>
              <Tabs.Screen name="HomeTab" component={HomeStackScreen} options={{headerShown:false}}/>
              <Tabs.Screen name="FavoritesTab" component={FavoritesStackScreen} options={{headerShown:false}}/>
            </Tabs.Navigator>
            )}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: defaultStyles.colors.white,
    padding: 20,
    paddingTop: 100,
  }
});

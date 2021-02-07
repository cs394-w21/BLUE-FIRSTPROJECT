import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharityScreen from './screens/CharityScreen';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import UserContext from './utils/UserContext';

export default function App() {
  const Tab = createBottomTabNavigator();

  // const [user, setUser] = useState(null);
  // const [auth, setAuth] = useState();
 
  // useEffect(() => {
  //   if (auth && auth.uid) {
  //     const db = firebase.database().ref('users').child(auth.uid);
  //     const handleData = snap => {
  //       setUser({uid: auth.uid, ...snap.val()});
  //     }
  //     db.on('value', handleData, error => alert(error));
  //     return () => { db.off('value', handleData); };
  //   } else {
  //     setUser(null);
  //   }
  // }, [auth]);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((auth) => {
  //     setAuth(auth);
  //   });
  // }, []);
  return (
    // <UserContext.Provider value={user}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Charities" component={CharityScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    // </UserContext.Provider>
  );
};

//<Tab.Screen name="Favorites" component={FavoritesScreen} />
//<Tab.Screen name="Profile" component={ProfileScreen} />

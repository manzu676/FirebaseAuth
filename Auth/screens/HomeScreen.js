import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Bienvenido {"\n"}
        {user.email}
        </Text>
        <IconButton
          name='logout'
          size={24}
          color='#DC1C13'
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>Tú id de usuario es:</Text>
      <Text style={styles.id}>{user.uid}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdecb6',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
    justifyContent: "center",
    alignItems: "center"
  },
  id:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});
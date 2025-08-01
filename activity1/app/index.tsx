import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { BlurView } from 'expo-blur'; 

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/Glowing Stars.svg')}
      style={[styles.background, { width: '100%', height: '100%' }]}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, { width: '100%', height: '100%' }]}
      >
      <ScrollView contentContainerStyle={styles.scroll}>
        <BlurView intensity={50} tint="dark" style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
        />

        <View style={styles.buttonRow}>
          <View style={styles.button}>
          <Button title="Sign Up" color="#1e88e5" onPress={() => {}} />
          </View>
          <View style={styles.button}>
          <Button title="Clear" color="#c62828" onPress={() => {}} />
          </View>
        </View>
        </BlurView>
      </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.29)',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    overflow: 'hidden', 
},

  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#2a2a2a88',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
  },
});

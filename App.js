import '@expo/match-media';
import Navigation from './navigation/navigation';
import Home from './pages/home/Home';
import { StatusBar } from 'expo-status-bar';
import { value } from './shared/Header';
import { SafeAreaView, Text } from 'react-native';

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text>Hello From Mobile App {value}</Text>
      </SafeAreaView>
      {/*
      <Navigation /> */}
      {/* <Home /> */}
    </>
  )
}

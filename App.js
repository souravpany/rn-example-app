import '@expo/match-media';
import Navigation from './navigation/navigation';
import Home from './pages/home/Home';
import { StatusBar } from 'expo-status-bar';
import { value } from './redux/Header';
import { SafeAreaView, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text>Hello Mobile App {value}</Text>
        <Calendar />
      </SafeAreaView>
      {/*
      <Navigation /> */}
      {/* <Home /> */}
    </>
  )
}

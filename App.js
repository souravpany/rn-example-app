import '@expo/match-media';
import Navigation from './navigation/navigation';
import Home from './pages/home/Home';
import { StatusBar } from 'expo-status-bar';
import { value } from './redux/Header';
import { SafeAreaView, Text, FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import React, { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getMovies = async () => {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  // Flat list item component
  const ItemView = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.id}</Text>
        <Text style={styles.item}>{item.title}</Text>
      </View>
    );
  };


  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text>Hello Mobile App {value}</Text>
        <Calendar />
        {isLoading ? <ActivityIndicator /> : (
          <FlatList data={data} renderItem={ItemView} keyExtractor={(item) => item.id} />
        )}

      </SafeAreaView>
      {/*
      <Navigation /> */}
      {/* <Home /> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});


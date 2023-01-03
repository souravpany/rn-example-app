import '@expo/match-media';
import Navigation from './navigation/navigation';
import Home from './pages/home/Home';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import React, { useEffect, useState } from 'react';
import { store } from './redux/store';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { fetchPosts } from './redux/feature/PostSlice';

export default function App() {


  const Home = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.postDetails)

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        //setData(json);
        dispatch(fetchPosts(json))
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      getMovies();
    }, []);

    return (
      <SafeAreaView>
        <Calendar />
        {isLoading ? <ActivityIndicator /> : (
          <FlatList data={posts} renderItem={ItemView} keyExtractor={(item) => item.id} />
        )}

      </SafeAreaView>
    )

  }


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
      <Provider store={store}>
        <Home />
      </Provider>

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


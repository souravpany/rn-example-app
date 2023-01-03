import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../redux/feature/PostSlice";

const Home = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.postDetails)

  const [data, setData] = useState([]);


  const getPost = async () => {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      dispatch(fetchPosts(json))
      //setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      console.error("Loading false");
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h2 style={{ color: "#9400d3", fontSize: "32" }}>Hello Web App</h2>
      <Calendar />

      {posts.map((item) => {
        return <h2 style={{ fontSize: "20" }} key={(item) => item.id}>{item.id} {item.title}</h2>
      })}

    </div>
  );
};

export default Home;

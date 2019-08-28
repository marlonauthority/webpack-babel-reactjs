import React from "react";
import "./app.css";
import Menubar from "./components/Menubar";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Menubar />
      <PostList />
    </>
  );
}

export default App;

import React from "react";
import Header from "./Components/Header";
import TodoContainer from "./Components/TodoContainer";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Header />
    <main>
      <TodoContainer />
    </main>
    <Footer />
    </>
  );
}

export default App;

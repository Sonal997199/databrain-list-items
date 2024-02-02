import { useState } from "react";
import axios from "axios";
import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
      <button className="button" onClick={() => fetchData()}>
        Fetch Data
      </button>
      {loading
        ? ""
        : data.map((i) => <Data post={i} key={i.id} />)}
      </div>
    </>
  );
}

export default App;
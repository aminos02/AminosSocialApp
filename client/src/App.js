import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Feed from "./components/feed/Feed";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Home />
      </div>
    </div>
  );
}

export default App;

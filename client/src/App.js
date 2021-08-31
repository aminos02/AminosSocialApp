import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import RightBar from "./components/rightbar/RightBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from "./component/sidebar";
import Header from "./component/header";
import Contact from "./component/contact";

function App() {
  return (
    <div className="App">
    <Sidebar/>
      <Contact/>
    <Header/>
    </div>
  );
}

export default App;

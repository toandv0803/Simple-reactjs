import Routes from "./routes";
import Header from "./Components/Header";
import MyContext from "./Contexts/myContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MyContext>
      <div className="App">
        <Header />
        <div className="container">
          <Routes />
        </div>
      </div>
    </MyContext>
  );
}

export default App;

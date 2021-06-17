import Routes from "./routes";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Routes />
            </div>
        </div>
    );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";

import TableEmployees from "./features/Employees/components/TableEmployees";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <TableEmployees />
            </div>
        </div>
    );
}

export default App;

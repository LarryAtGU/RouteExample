import { Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/products";
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

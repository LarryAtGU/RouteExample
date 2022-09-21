import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/products";
import MainHeader from "./components/mainheader";
import ProductDetail from "./pages/productdetail";
function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import ShopingCart from "./Pages/ShopppingCart/ShoppingCart";
import ProductShowCase from "./Pages/ProductShowcase/ProductShowCase";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <FloatingCart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits" component={Products} />
        <Route exact path="/produits/:id" component={ProductShowCase} />
        <Route exact path="/shoppingCart" component={ShopingCart} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

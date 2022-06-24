// import "./App.css";
// import { useEffect } from "react";
// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home";
// import ProductDetails from "./component/Product/ProductDetails";
// import Products from "./component/Product/Products";
// import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// // import axios from "axios";
// // import Payment from "./component/Cart/Payment";
// // import { Elements } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrder from "./component/Order/MyOrder";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import editProduct from "./component/Admin/editProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";

// function App() {
//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   // const [stripeApiKey, setStripeApiKey] = useState("");

//   // async function getStripeApiKey() {
//   //   const { data } = await axios.get("/api/v1/stripeApiKey");

//   //   setStripeApiKey(data.stripeApiKey);
//   // }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });

//     store.dispatch(loadUser());

//     // getStripeApiKey();
//   }, []);

//   window.addEventListener("contextmenu", (e) => e.preventDefault());

//   return (
//     <Router>
//       <Header />

//       {isAuthenticated && <UserOptions user={user} />}

//       {/* {stripeApiKey && (
//         <Elements stripe={loadStripe(stripeApiKey)}>
//           <Route exact path="/process/payment" element={<ProtectedRoute/>} component={<Payment/>} />
//         </Elements>
//       )} */}

//       <Switch>
//         <Route exact path="/" element={<Home/>} />
//         <Route exact path="/product/:id" element={<ProductDetails/>} />
//         <Route exact path="/products" element={<Products/>} />
//         <Route path="/products/:keyword" element={<Products/>} />

//         <Route exact path="/search" element={<Search/>} />

//         <Route exact path="/contact" element={<Contact/>} />

//         <Route exact path="/about" element={<About/>} />

//         <Route exact path="/me" element={<ProtectedRoute/>} component={<Profile/>} />
//         {/* account */}
//         <Route exact path="/me/update" element={<ProtectedRoute/>} component={<UpdateProfile/>} />

//         <Route
//           exact
//           path="/password/update"
//           component={<UpdatePassword/>}
//           element={<ProtectedRoute/>}
//         />

//         <Route exact path="/password/forgot" element={<ForgotPassword/>} />

//         <Route exact path="/password/reset/:token" element={<ResetPassword/>} />

//         <Route exact path="/login" element={<LoginSignUp/>} />

//         <Route exact path="/cart" element={<Cart/>} />

//         <Route exact path="/shipping" element={<ProtectedRoute/>} component={<Shipping/>} />

//         <Route exact path="/success" element={<ProtectedRoute/>} component={<OrderSuccess/>} />

//         <Route exact path="/orders" element={<ProtectedRoute/>} component={<MyOrder/>} />

//         <Route exact path="/order/confirm" element={<ProtectedRoute/>} component={<ConfirmOrder/>} />

//         <Route exact path="/order/:id" element={<ProtectedRoute/>} component={<OrderDetails/>} />

//         <Route
//           isAdmin={true}
//           exact
//           path="/admin/dashboard"
//           component={<Dashboard/>}
//           element={<ProtectedRoute/>} 
//         />
//         <Route
//           exact
//           path="/admin/products"
//           isAdmin={true}
//           element={<ProtectedRoute/>} 
//           component={<ProductList/>}
//         />
//         <Route
//           exact
//           path="/admin/product"
//           isAdmin={true}
//           element={<ProtectedRoute/>} 
//           component={<NewProduct/>}
//         />

//         <Route
//           exact
//           path="/admin/product/:id"
//           isAdmin={true}

//           element={<ProtectedRoute/>} 
//           component={<editProduct/>}
//         />
//         <Route
//           exact
//           path="/admin/orders"
//           isAdmin={true}
//           element={<ProtectedRoute/>} 
//           component={<OrderList/>}
//         />

//         <Route
//           exact
//           path="/admin/order/:id"
//           isAdmin={true}
//           element={<ProtectedRoute/>}
//           component={<ProcessOrder/>}
//         />
//         <Route
//           exact
//           path="/admin/users"
//           isAdmin={true}
//           element={<ProtectedRoute/>}
//           component={<UsersList/>}
//         />

//         <Route
//           exact
//           path="/admin/user/:id"
//           isAdmin={true}
//           element={<ProtectedRoute/>}
//           component={<UpdateUser/>}
//         />

//         <Route
//           exact
//           path="/admin/reviews"
//           isAdmin={true}
//           element={<ProtectedRoute/>}
//           component={<ProductReviews/>}
//         />

//         <Route
//           element={
//             window.location.pathname === "/process/payment" ? null : NotFound
//           }
//         />
//       </Switch>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { useEffect} from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrder from "./component/Order/MyOrder";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import editProduct from "./component/Admin/editProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
{/* 
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrder} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={editProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

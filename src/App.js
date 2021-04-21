import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import AddServices from "./components/Home/AddServices/AddServices";
import PrivateRoute from "./components/Login/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import BookingList from "./components/BookingList/BookingList";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import CheckOUt from "./components/CheckOut/CheckOUt";
import AdminPage from "./components/AdminPage/AdminPage";
import OrderList from "./components/OrderList/OrderList";
import Book from "./components/Book/Book";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [service, setService] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <UserContext.Provider
      value={[
        loggedInUser,
        setLoggedInUser,
        service,
        setService,
        selectedDate,
        setSelectedDate,
      ]}
    >
      <p>Name:{loggedInUser.name}</p>
      <Router>
        <Switch>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/OrderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/Book">
            <Book></Book>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <PrivateRoute path="/CheckOUt/:_id">
            <CheckOUt></CheckOUt>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/AdminPage">
            <AdminPage></AdminPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

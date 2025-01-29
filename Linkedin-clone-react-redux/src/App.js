import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Body/Sidebar";
import Feed from "./components/Body/Feed";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/Slices/UserSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import Widgets from "./components/Body/Widgets";

const App = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // use is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
};

export default App;

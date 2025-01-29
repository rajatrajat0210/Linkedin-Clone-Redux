import React, { useState } from "react";
import "./Login.css";
import { login } from "../../redux/Slices/UserSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    profilePic: "",
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const loginHandler = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const { email, uid, displayName, photoURL } = userAuth.user;
        dispatch(
          login({
            email,
            uid,
            displayName,
            photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const register = async () => {
    const { name, email, password, profilePic } = formData;

    if (!name) {
      return alert("Please enter a full name");
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      await user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      });
      dispatch(
        login({
          email,
          uid: user.uid,
          displayName: name,
          photoURL: profilePic,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login">
      <img
        src="https://www.pinclipart.com/picdir/middle/55-557165_graphic-transparent-library-file-logo-wikimedia-commons-transparent.png"
        alt="linkin logo"
      />

      <div className="test-details">
        <h4>For test</h4>
        <p>email: testuser@gmail.com</p>
        <p>password: testuser</p>
      </div>

      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={changeHandler}
          placeholder="Profile picture URL (optional)"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;

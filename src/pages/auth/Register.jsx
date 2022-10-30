import React from "react";
import styles from "./auth.module.scss";
import bg_register from "../../assets/bg_register.png";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config.js";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [changepassword, setChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const registerUser = (e) => {
    e.preventDefault();
    if (password !== changepassword) {
      toast.error("Password do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Register successful");
        navigate("/login")
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false)
      });
  };
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={bg_register} alt="Login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassWord(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={changepassword}
                onChange={(e) => {
                  setChangePassword(e.target.value);
                }}
              />
              <button type="submit" className="">
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p>Already an account? </p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Register;

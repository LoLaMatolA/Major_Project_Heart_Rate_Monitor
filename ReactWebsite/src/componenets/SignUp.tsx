import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch("/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        throw new Error("Sign up failed");
      }

      // Set the success state to true
      setSignUpSuccess(true);
    } catch (error) {
      //@ts-ignore
      console.error("Error signing up:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="pink">
          <form onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>

          {signUpSuccess && (
            <div style={{ marginTop: "20px" }}>
              <p>Sign up successful! Click <Link to="/SignIn">here</Link> to sign in.</p>
            </div>
          )}
        </Container>
      </Background>
    </div>
  );
};

export default SignUp;

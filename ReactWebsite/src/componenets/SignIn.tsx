import { SetStateAction, useState, useContext } from "react";
import Background from "./Background";
import axios from "axios";
import Navbar from "./Navbar";
import Container from "./Container";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
 

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post("/SignIn", {
        email: email,
        password: password,
      });
      userContext.updateUserData(response.data.userData);

      console.log(
        response.data.userData +
          "this is response from the signin comp  " +userContext.userData.email +"  this is the context data"
      );
    } catch (err) {}
  };

  return (
    
     
      <div>
        <Navbar />
        <Background imagePath="public/backgroundImage1.svg">
          <Container backgroundColorDiv="#FFFCFD" borderColorDiv="pink">
            <form onSubmit={handleSignIn}>
              <h1>SIGN IN</h1>
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
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                SignIn
              </button>

              <div>
                <p>
                  New User? <Link to="/SignUp">Sign Up</Link>
                </p>
                {/* {userData && (
            <div>
              <p>Signed in successfully!</p>
              <a href="/UserDashBoard">Go to User Dashboard</a>
            </div>
          )} */}
              </div>
            </form>
          </Container>
        </Background>
      </div>
    
  );
};

export default SignIn;

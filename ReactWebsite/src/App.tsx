import { Suspense, useContext } from "react";
import Background from "./componenets/Background";
import Container from "./componenets/Container";
import Navbar from "./componenets/Navbar";
import "./App.css";
import { UserContext } from "./componenets/UserContext";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
//@ts-ignore
import Model from "../public/Model";

function App() {

  const userContext=useContext(UserContext)
console.log("this is app speaking hellooo: "+userContext.userData);
  return (
    
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="#E3FFC6">
          <h1 className="sevillana-regular firstH1">
            Welcome to heart rate monitor!
          </h1>
          <Canvas
            className="canvasConatiner"
            camera={{
              fov: 75,
              aspect: window.innerWidth / (window.innerHeight / 3),
              near: 0.1,
              far: 10000,
              position: [0, 0, 120],
            }}
          >
            <ambientLight intensity={2} />
            <OrbitControls enableZoom={false} />
            <Suspense>
              <Model></Model>
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
          <p className="lead" id="firstP">
            Welcome to our website, your easy-to-use solution for pulse
            monitoring and relaxation. Designed with simplicity in mind, our
            platform offers a straightforward way to keep track of your heart
            rate and unwind with guided exercises.
          </p>
          <br /> <br />
          <p>
            Our website provides a convenient tool for checking your pulse
            whenever you need it. Whether you're curious about your heart health
            or simply want to stay in tune with your body, our user-friendly
            interface makes pulse monitoring accessible to everyone.
            <br /> In addition to pulse measurement, we offer a range of
            relaxation exercises to help you de-stress and find moments of calm
            in your busy day. Our guided sessions are designed to be gentle and
            soothing, making it easy for anyone to relax and recharge. <br />
            This website is part of a humble project called the Heart Rate
            Monitor, created as part of a Bachelor of Technology degree program
            in Computer Science at LU (insert full name of the university). Our
            goal is to provide a simple yet effective tool for improving your
            well-being, one heartbeat at a time.
          </p>
        </Container>
      </Background>
    </div>
  );
}
export default App;

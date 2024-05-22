import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";
import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";

const Relax = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [pulse, setPulse] = useState<string | null | number>(
    "Connect Arduino."
  );
  const [socket, setSocket] = useState<any>(null);
  const pulseDisplayRef = useRef<HTMLDivElement>(null);

  const handleStartPulse = () => {
    if (!socket) {
      const newSocket = io(); // Connect to Socket.IO server
      setSocket(newSocket);
      setButtonPressed(true);

      // Listen for 'data' event from the server
      newSocket.on("data", function (data) {
        if (data > 130) {
          setPulse("Stabilizing");
        } else {
          setPulse(data);
        }
      });
    }
  };

  const handleStopPulse = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setButtonPressed(false);
      setPulse("Connect Arduino.");
    }
  };

  useEffect(() => {
    // Clean up function to disconnect from the Socket.IO server
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="#E3FFC6">
          <h1>Relax together with the Heart Rate Sensor!</h1>
          <h2>Introduction</h2>
          <p>
            In the hustle and bustle of modern life, finding moments to unwind
            can seem like an elusive dream. Pressures from work, social
            obligations, and the never-ending stream of information can leave us
            feeling overwhelmed and disconnected from our inner peace.
            Recognizing the challenges many face in finding relaxation, we've
            embarked on a humble endeavor. Our aim is to offer a simple refuge,
            a digital oasis where individuals can briefly escape the chaos and
            tune into their own rhythms. Through the gentle guidance of heart
            rate monitoring, we invite you to explore this digital sanctuary and
            rediscover moments of tranquility amidst the noise of everyday life.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
              color: "pink",
              position: "sticky",
              top: "10px",
            }}
          >
            {buttonPressed && (
              <div
                ref={pulseDisplayRef}
                style={{
                  fontSize: "48px",
                  marginLeft: "20px",
                  position: "sticky",
                  top: "10px",
                }}
              >
                {pulse}
              </div>
            )}
            <button onClick={handleStartPulse} disabled={buttonPressed}>
              Start Monitoring Pulse
            </button>
            <button
              onClick={handleStopPulse}
              disabled={!buttonPressed}
              style={{ marginLeft: "10px" }}
            >
              Stop Monitoring Pulse
            </button>
          </div>
          <h3>Understanding your pulse</h3>
          <p>
            Your pulse, also known as your heart rate, is a measure of the
            number of times your heart beats per minute. It's a valuable
            indicator of your overall cardiovascular health and can vary
            depending on factors such as physical activity, stress levels, and
            even your emotions. As you engage in relaxation exercises on this
            webpage, your heart rate will be continuously monitored and
            displayed in real-time. Watching your pulse fluctuate as you
            practice different relaxation techniques can provide valuable
            insights into how your body responds to stress and relaxation.
          </p>
          <h2>Discover Simple Breathing Techniques for Heart Health</h2>

          <p>
            Learn how easy breathing exercises can benefit your heart health:
          </p>

          <ol>
            <li>
              <h3>Diaphragmatic Breathing</h3>
              <p>
                Inhale deeply through your nose, filling your stomach with air,
                then exhale slowly.
              </p>
            </li>
            <li>
              <h3>4-7-8 Method</h3>
              <p>
                Inhale for four seconds, hold for seven, and exhale for eight.
              </p>
            </li>
            <li>
              <h3>Equal Length Breaths</h3>
              <p>
                Inhale and exhale for the same duration, starting with five
                seconds.
              </p>
            </li>
            <li>
              <h3>30-Second Breathing</h3>
              <p>
                Take six deep breaths in 30 seconds, focusing on quality over
                quantity.
              </p>
            </li>
            <li>
              <h3>Box Breathing</h3>
              <p>
                Inhale, hold, and exhale for four seconds each, creating a
                uniform pattern.
              </p>
            </li>
            <li>
              <h3>Alternate Nostril Breathing</h3>
              <p>
                Inhale through one nostril, switch, then exhale through the
                other.
              </p>
            </li>
            <li>
              <h3>Pursed Lip Breathing</h3>
              <p>
                Inhale through your nose, exhale slowly through pursed lips,
                lasting twice as long.
              </p>
            </li>
            <li>
              <h3>Humming While Breathing</h3>
              <p>
                Inhale deeply, then exhale while humming to gradually release
                air from your lungs.
              </p>
            </li>
          </ol>

          <p>
            Try these techniques anywhere, anytime, for a healthier heart and a
            calmer mind.
          </p>
        </Container>
      </Background>
    </div>
  );
};

export default Relax;

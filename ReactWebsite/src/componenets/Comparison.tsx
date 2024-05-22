import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";

const Comparison = () => {
  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="#E3FFC6">
          <h1>Comparision Report</h1>
          <div>
            <div>
              <h2>Introduction to Pulse Sensing Technologies</h2>
              <p>
                Pulse sensing, a critical component of modern health monitoring,
                typically relies on photoplethysmography (PPG), a non-invasive
                optical technique that measures blood volume changes in the
                microvascular bed of tissue. Utilizing light-based sensors, PPG
                detects the variations in light absorption caused by the pulsing
                of blood through the capillaries. This technology is
                foundational for devices like heart rate sensors and pulse
                oximeters, providing real-time data on heart rate and blood
                oxygen saturation (SpO2). By illuminating the skin and measuring
                the light either transmitted or reflected to a photodetector,
                these devices can accurately capture the rhythmic fluctuations
                associated with the cardiac cycle, making them invaluable tools
                in both clinical and consumer health applications.
              </p>
            </div>
            <div>
              <h3>Introducing the Comparison Graph</h3>
              <p>
                To evaluate the performance and accuracy of our Arduino-based
                heart rate sensor against a standard pulse oximeter, we
                conducted a comparative analysis. The following graph
                illustrates the heart rate readings obtained from both devices
                over a specified period. By plotting the data points from the
                Arduino pulse sensor and the pulse oximeter side by side, we aim
                to highlight the correlation and discrepancies between the two
                technologies. This visual representation provides a clear
                insight into the effectiveness and reliability of our sensor in
                real-world conditions, offering a direct comparison to the
                established standard used in medical settings.
              </p>

              <div>
                <img src="public\line-graph.png" alt="comparision graph"></img>
              </div>
              <p>
                The comparison graph reveals that while both the Arduino heart
                rate sensor and the pulse oximeter generally follow the same
                trend in tracking pulse rate, there are notable differences in
                their response to abrupt changes. The Arduino pulse sensor
                demonstrates higher sensitivity to sudden movements, which can
                result in immediate and significant fluctuations in the recorded
                pulse rate. In contrast, the pulse oximeter shows greater
                stability under similar conditions, typically exhibiting only
                minor spikes before quickly returning to a normal reading.
                Despite these differences in responsiveness, the overall pulse
                rate values from both devices remain closely aligned, indicating
                that the Arduino sensor provides a reasonably accurate
                measurement under steady conditions but is more prone to
                artifacts from abrupt physical activity. This suggests that
                while the Arduino sensor is effective for general monitoring,
                the pulse oximeter offers more reliable performance in dynamic
                situations.
              </p>
            </div>
            <div>
              <h4>Limitations and Appropriate Use of Arduino Pulse Sensors</h4>
              <p>
                While Arduino-based pulse sensors offer a convenient and
                accessible way to monitor heart rate for personal use, they are
                not designed for medical diagnosis. These sensors are ideal for
                hobbyists, fitness enthusiasts, and anyone interested in
                tracking their pulse rate for general wellness purposes.
                However, the sensitivity of Arduino sensors to abrupt movements
                and their susceptibility to noise can lead to inaccuracies that
                are not acceptable in clinical settings. Medical-grade sensors,
                such as those found in professional pulse oximeters, undergo
                rigorous testing and calibration to ensure their accuracy and
                reliability. These devices are designed to maintain precision
                under various conditions, including physical activity and
                varying environmental factors. They are subject to stringent
                regulatory standards and clinical validation to ensure they can
                reliably support medical diagnoses and treatment decisions. In
                contrast, Arduino pulse sensors lack the same level of precision
                and comprehensive testing, making them unsuitable for clinical
                use. Therefore, while Arduino pulse sensors provide a useful
                tool for personal health monitoring, they should not be relied
                upon for diagnosing medical conditions. For any medical concerns
                or precise health monitoring needs, one should always use
                professional medical devices and consult healthcare
                professionals.
              </p>
            </div>
          </div>
        </Container>
      </Background>
    </div>
  );
};

export default Comparison;

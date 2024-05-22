import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";

const Developer = () => {
  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="#E3FFC6">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src="public/riya.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Riya Mishra</h5>
                  <p className="card-text">
                    Front-end developer proficient in HTML, CSS, and JavaScript.
                    Specializes in creating captivating home and login pages to
                    enhance user experience in major projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="public/shreya.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shreya Gupta</h5>
                  <p className="card-text">
                    Front-end developer with a focus on data visualization,
                    adept at transforming complex heart rate data into visually
                    appealing graphs. Utilizes JS libraries to create displays.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="./public/shruti.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shruti Yadav</h5>
                  <p className="card-text">
                    Backend developer adept at integrating Arduino-based servers
                    with Node.js and Java to process heart rate data. Ensures
                    seamless data communication for effective heart rate graph.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="./public/roli.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Roli Shakya</h5>
                  <p className="card-text">
                    Backend developer proficient in Arduino scripting,
                    integrating hardware functionality. Ensures smooth data
                    flow, crucial for generating dynamic heart rate graphs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Background>
    </div>
  );
};

export default Developer;

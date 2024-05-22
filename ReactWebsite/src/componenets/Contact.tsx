import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="pink" />
      </Background>
    </div>
  );
};

export default Contact;

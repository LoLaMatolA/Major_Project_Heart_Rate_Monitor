import { ReactNode } from "react";


interface Props {
  backgroundColorDiv: string;
  borderColorDiv: string;
  children?:ReactNode;
}

const Container = ({ backgroundColorDiv, borderColorDiv="#E3FFC6", children =""}: Props) => {
  const divStyle = {
    backgroundColor: backgroundColorDiv,
    border: `2px solid ${borderColorDiv}`,
    margin: "0 auto ",
    padding: "20px",
    borderRadius: "20px",
    minHeight: "100vh",
    positionLocal:"relative",
    
  };

  return <div style={divStyle}>
    {children}
  </div>;
};

export default Container;

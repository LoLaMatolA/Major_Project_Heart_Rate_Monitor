import { ReactNode } from "react";

interface Props {
  imagePath: string;
  children?: ReactNode;
}

const Background = ({ imagePath, children = "<></>" }: Props) => {
  const divStyle = {
    backgroundImage: `url(${imagePath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px 100px 30px 100px ",
    minHeight: "100vh", 
  };

  return (
    <div className="bg-image" style={divStyle}>
      {children}
    </div>
  );
};

export default Background;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Background from "./Background";
import Navbar from "./Navbar";
import Container from "./Container";
import { UserContext } from "./UserContext";
import Graph from "./Graph";
import PulseTable from "./PulseTable";

const UserDashboard = () => {
  const userContext = useContext(UserContext);
  const [pulseValue, setPulseValue] = useState(""); // State to track the pulse value
  const [pulseAdded, setPulseAdded] = useState(false); // State to track whether pulse has been added
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [pulseArray, setPulseArray] = useState<{ pulse: string; date: string }[]>([]);
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the table is expanded

  useEffect(() => {
    const getData = async () => {
      try {
        const tempResponse = await axios.post("/UserDashBoard", {
          email: userContext.userData.email,
        });
        setEmail(tempResponse.data.email);
        setFullName(tempResponse.data.fullName);
        setPulseArray(tempResponse.data.pulse);
      } catch (error) {
        console.error("Error signing in:", error);
      }
    };

    getData(); // Call the getData function when the component renders
  }, [pulseAdded]);

  const handleAddPulse = async () => {
    if (!pulseValue.trim()) {
      alert("Please enter a valid pulse rate");
      return;
    }
    try {
      // Make a POST request to your backend to add the pulse
      await axios.post("/addPulse", {
        email: userContext.userData.email,
        pulse: pulseValue,
      });
      setPulseAdded(true);
      setPulseValue(""); // Clear the input field after adding pulse
      setTimeout(() => setPulseAdded(false), 2000);
    } catch (error) {
      console.error("Error adding pulse:", error);
    }
  };

  const handleDelete = async (indexToDelete: number) => {
    try {
      // Make a DELETE request to your backend to delete the pulse value
      await axios.delete("/deletePulse", {
        data: {
          email: userContext.userData.email,
          index: indexToDelete,
        },
      });

      // Update pulseArray state to remove the deleted item
      const newPulseArray = [...pulseArray];
      newPulseArray.splice(indexToDelete, 1);
      setPulseArray(newPulseArray);

      console.log("Pulse deleted successfully");
    } catch (error) {
      console.error("Error deleting pulse:", error);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <Background imagePath="public/backgroundImage1.svg">
        <Container backgroundColorDiv="#FFFCFD" borderColorDiv="pink">
          {userContext.userData ? (
            <div>
              <h1>Welcome, {fullName}</h1>
              <p>Email: {email}</p>
              <p>pulse: {pulseArray.map((item) => item.pulse).join(", ")}</p>
              <div>
                <Graph pulseData={pulseArray}></Graph>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button onClick={toggleExpand}>
                  {isExpanded ? "Collapse Table" : "Expand Table"}
                </button>
              </div>
              <div
                style={{
                  maxHeight: isExpanded ? "none" : "300px",
                  overflow: "auto",
                  marginTop: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Category</th>
                      <th scope="col">Pulse</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pulseArray.map((item, index) => (
                      <PulseTable
                        key={index}
                        pulseValue={Number(item.pulse)}
                        index={index}
                        date={new Date(item.date).toLocaleString()}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "20px" }}>
                <input
                  type="number"
                  placeholder="Enter pulse rate"
                  value={pulseValue}
                  onChange={(e) => setPulseValue(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button onClick={handleAddPulse}>Add Pulse</button>
              </div>
              {pulseAdded && (
                <p style={{ color: "green", marginTop: "10px" }}>
                  Pulse added successfully!
                </p>
              )}
            </div>
          ) : (
            <div>
              <h1>Please Sign In</h1>
            </div>
          )}
        </Container>
      </Background>
    </div>
  );
};

export default UserDashboard;

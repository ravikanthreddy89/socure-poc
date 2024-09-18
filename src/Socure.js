import SigmaDeviceManager from "@socure-inc/device-risk-sdk";

import { useEffect, useState } from "react";

const Socure = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    SigmaDeviceManager.initialize({
      sdkKey: "ed2bee87-1088-44bc-ac17-a7b5a192f8cd",
    });
  }, []);

  useEffect(() => {
    if (count == 2) {
      SigmaDeviceManager.getSessionToken().then((sessionToken) => {
        console.log("sessionToken", sessionToken);
        // Logic to store this sessionToken
      });
    }
  }, [count]);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Socure component</p>
    </div>
  );
};

export default Socure;

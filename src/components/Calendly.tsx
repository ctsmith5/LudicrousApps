import React from "react";
import { PopupButton } from "react-calendly";

const SchedulingButton: React.FC = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    return <div>Error: Root element not found</div>;
  }
  return (
    <div className="MySchedulingButton">
      <PopupButton
        url="calendly.com/colin-smith356"
        rootElement={rootElement}
        text="Click here to schedule!"
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
      />
    </div>
  );
};

export default SchedulingButton;

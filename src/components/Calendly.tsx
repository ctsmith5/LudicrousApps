import React from "react";
import { PopupButton } from "react-calendly";

/**
 * A React functional component that renders a Calendly scheduling button.
 *
 * The component creates a popup button that opens a Calendly scheduling interface
 * with a pre-configured URL that includes the current year and month. It uses
 * `padStart(2, '0')` to ensure the month is always displayed as a two-digit string
 * (e.g., "01" instead of "1" for January).
 *
 * @returns A JSX element containing the PopupButton component, or an error message
 *          if the root DOM element is not found
 *
 * @example
 * ```tsx
 * <SchedulingButton />
 * ```
 */
const SchedulingButton: React.FC = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    return <div>Error: Root element not found</div>;
  }
  return (
    <div className="MySchedulingButton">
      <PopupButton
        url={`https://calendly.com/colin-smith356/30min?back=1&month=${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`}
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

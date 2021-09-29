import React, { useRef } from "react";
import "./styles.css";
import { Box } from "./Box";

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

export default function App() {
  const ref = useRef();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SnapParent
        ref={ref}
        style={{
          position: "absolute",
        }}
      >
        <Box full color="#FDD692">
          Box 1 (full)
        </Box>
        <Box half triggerOnce transLeft color="#C5E99B">
          Box 2 (half)
        </Box>
        <Box full color="#84B1ED">
          Box 3 (full)
        </Box>
        <Box half triggerOnce transLeft color="#67D5B5">
          Box 4 (half)
        </Box>
        <Box full color="#FDD692">
          Box 5 (full)
        </Box>

        <Box full color="#84B1ED">
          Box 6 (full)
        </Box>
      </SnapParent>
    </div>
  );
}

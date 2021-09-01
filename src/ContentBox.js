import React from "react";
import "./styles.css";
//import { useInView } from "react-intersection-observer";
//import { motion } from "framer-motion";

// const CHILD_VARIANTS_SCALE = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0.1 },
// };

// const CHILD_VARIANTS_LEFT = {
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, x: -500 },
// };

export const ContentBox = ({ color }) => {
  return (
    <div
      className="snap-child-start snap-child-stop"
      style={{
        paddingTop: 20,
        paddingBottom: 320,
        marginTop: 2,
        marginBottom: 2,
        width: "100%",
        backgroundColor: color,
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50vw" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
        </p>
      </div>
    </div>
  );
};

import React from "react";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 },
};

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 },
};

export const Box = ({
  color,
  full = false,
  half = false,
  transLeft = false,
  transScale = false,
  triggerOnce = false,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: triggerOnce,
  });
  // <p>{`Header inside viewport ${inView}.`}</p>
  return (
    <div
      className="snap-child-center"
      ref={ref}
      style={{
        marginTop: 2,
        marginBottom: 2,
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          zIndex: 40,
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={
          transLeft
            ? CHILD_VARIANTS_LEFT
            : transScale
            ? CHILD_VARIANTS_SCALE
            : CHILD_VARIANTS_SCALE
        }
      >
        <h2
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
            fontSize: 43,
          }}
        >
          {children}
        </h2>
      </motion.div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        color: "white",
        fontSize: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.img
        src="./loading.png" // Update with your loading image URL
        alt="Loading"
        style={{ width: 300, height: 300 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <center>LOADING...</center>
    </div>
  );
};

export default LoadingPage;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Assuming you have a Loading component
import LoadingPage from "./LoadingPage";

const About = () => {
  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay time as needed

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Render loading component if isLoading is true
  if (isLoading) {
    return <LoadingPage />;
  }

  // Render content once loading is complete
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/2075.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "white",
      }}
    >
      
      <div style={{ position: "relative", maxWidth: "800px", maxHeight: "553px", textAlign: "left", padding: "25px", borderRadius: "10px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)", backdropFilter: "blur(7px)" }}>
        <h1 style={{ fontSize: "27px", marginBottom: "14px", marginTop: "0px", paddingTop: "0px" }}>Gurupranav</h1>

        {/* Personal Information */}
        <div style={{ marginBottom: "14px" }}>
          <h2>About Me</h2>
          <p>
            I am a passionate and creative developer with a strong background in web development.<br /> I love building
            innovative solutions that solve real-world problems.
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "14px" }}>
          <h2>Education</h2>
          <p>
            <strong>Bachelor of Commerce</strong><br />
            TGASC, Pondicherry University.
          </p>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: "14px" }}>
          <h2>Experience</h2>

          <ul>
            <li>Developed and maintained web applications using React.js.</li>
            <li>Had internship Experience.</li>
          </ul>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "14px" }}>
          <h2>Skills</h2>
          <ul>
            <li>HTML5/CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>RESTful APIs</li>
            <li>Database Management</li>
          </ul>
        </div>

        {/* Image */}
        <img src="./me.jpg" style={{ position: "absolute", bottom: "10px", right: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", height:"200px", width:"170px" }} alt="Me" />
      </div>
    

      <div style={{ position: 'fixed', top: '35%', left: '81%'}}>

      <motion.div
         whileHover={{ scale: 1.1, borderWidth: '5px' }} // Scale the image and increase border size on hover
          >
             <a href='/Contact'>
       <motion.img
        src="/earth.png"
        alt="Rotating Earth"
        style={{ width: 190, height: 190 }}
        animate={{ rotate: [0, 360], transition: { duration: 100, loop: Infinity } }}
      />
       </a>
            </motion.div>
      
    </div>
    <div style={{ position: 'fixed',  top: '42%', left: '81%', transform: 'translate(-50%, -50%)'}}>
        <motion.h4
          style={{ color: 'white' }}
        >
          Contact
        </motion.h4>
      </div>

      <div style={{ position: 'fixed', top: '82%', left: '10%', transform: 'translate(-50%, -50%)' }}>
       <a href='/service'>
       <motion.img
          src="/star.png"
          alt="Twinkling Image"
          style={{ width: 175, height: 175, borderRadius: '50%' }}
          initial={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: [1, 1.2, 1], // Scale from 1 to 1.2 and back to 1
            opacity: [1, 0.5, 1], // Change opacity from 1 to 0.5 and back to 1
          }}
          whileHover={{
            scale: [1, 1.2, 1], // Scale from 1 to 1.2 and back to 1
            opacity: [1, 0.5, 1], // Change opacity from 1 to 0.5 and back to 1
            transition: {
              duration: 1.5,
              loop: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
       </a>
      </div>
      <div style={{ position: 'fixed', top: '94%', left: '10%', transform: 'translate(-50%, -50%)'}}>
        <motion.h3
          style={{ color: 'white' }}
        >
          Service
        </motion.h3>
      </div>
      <div>
        <a href="/">
          <motion.img
            src="/astro.png"
            alt="Moving Image"
            style={{ width: 200, height: 200, position: 'fixed',  top : '5%', left: '7%' }} // Adjust width and height as needed
            animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity },  }} // Image moves up and down in a cross pattern
          />
        </a>
      </div>
      <div style={{ position: 'fixed', top: '20%', left: '8%', transform: 'translate(-50%, -50%)'}}>
        
        <motion.h4
          style={{ color: 'white' }}
          animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity } }} // Text moves up and down in a cross pattern
        >
          Home
        </motion.h4>
      </div>

    </div>
  );
};

export default About;
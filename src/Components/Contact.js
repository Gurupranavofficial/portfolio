import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingPage from "./LoadingPage"; // Import your LoadingPage component

const Contact = () => {
  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Render loading page while loading
  if (isLoading) {
    return <LoadingPage />;
  }

  // Render contact component once loading is complete
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/contact.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <div
        style={{
          width: "900px",
          height: "500px",
          backgroundColor: "rgba(78, 107, 255, 0.7)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.img 
          src="./gmail.png" 
          height={'60px'} 
          width={'80px'} 
          alt="Gmail Logo"
          whileHover={{ scale: 1.2 }} // Scale up when hovered
        />
        <h3 style={{color:'white'}}>gurupranav045@gmail.com</h3>
        
        <motion.img 
          src="./phone.png" 
          height={'80px'} 
          width={'80px'} 
          whileHover={{ scale: 1.2 }} // Scale up when hovered
        />
        <h3 style={{color:'white'}}>919342662522</h3>
        
        <motion.img 
          src="./house.png" 
          height={'80px'} 
          width={'80px'} 
          whileHover={{ scale: 1.2 }} // Scale up when hovered
        />
        <h3 style={{color:'white'}}>No.15, Ilango Adigal St, Mutharaiyarpalayam, Puducherry, TamilNadu, India </h3>
      </div>

      <div>
        <a href="/">
          <motion.img
            src="/astro.png"
            alt="Moving Image"
            style={{ width: 200, height: 200, position: 'fixed',  top : '15%', left: '84%' }} // Adjust width and height as needed
            animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity },  }} // Image moves up and down in a cross pattern
          />
        </a>
      </div>
      <div style={{ position: 'fixed', top: '30%', left: '85%', transform: 'translate(-50%, -50%)'}}>
        
        <motion.h4
          style={{ color: 'white' }}
          animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity } }} // Text moves up and down in a cross pattern
        >
          Home
        </motion.h4>
      </div>

      <div style={{ position: 'fixed', top: '5%', left: '5%'}}>

      <motion.div
         whileHover={{ scale: 1.1, borderWidth: '5px' }} // Scale the image and increase border size on hover
          >
             <a href='/Service'>
       <motion.img
        src="/earth.png"
        alt="Rotating Earth"
        style={{ width: 190, height: 190 }}
        animate={{ rotate: [0, 360], transition: { duration: 100, loop: Infinity } }}
      />
       </a>
            </motion.div>
      
    </div>
    <div style={{ position: 'fixed',  top: '12%', left: '7%', transform: 'translate(-50%, -50%)'}}>
        <motion.h4
          style={{ color: 'white' }}
        >
          Service
        </motion.h4>
      </div>

      <div style={{ position: 'fixed', top: '82%', left: '8%', transform: 'translate(-50%, -50%)' }}>
       <a href='/About'>
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
      <div style={{ position: 'fixed', top: '94%', left: '8%', transform: 'translate(-50%, -50%)'}}>
        <motion.h3
          style={{ color: 'white' }}
        >
          About me
        </motion.h3>
      </div>
    </div>
  );
};

export default Contact;
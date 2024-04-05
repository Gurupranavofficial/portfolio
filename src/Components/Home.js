import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage"; // Import the LoadingPage component

const Home = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const word = ' Hello there!';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= word.length) {
        setText(word.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
        setIsLoading(false); // Set loading to false when animation is complete
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [word]);

  // Render loading page if isLoading is true
  if (isLoading) {
    return <LoadingPage />;
  }

  // Render content once loading is complete
  return (
    <div 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/stars-2643089.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
        
        <div  style={{ display: 'flex', alignItems: 'flex-start' }}>
       <motion.h1
          transition={{ duration: 2 }}
        >
          <h2 style={{ color: '#4682B4', fontFamily: 'Merriweather, serif' }}>
            {text}
          </h2>
        </motion.h1>
        </div>
        <div style={{position:'fixed', top:'25%', left:'13%', color:'white'}}>
          <h1> I am Gurupranav</h1>
        </div>
        <div style={{position:'fixed', top:'32%', left:'13%', color:'white'}}>
          <h1> A web-developer</h1>
        </div>

      <div style={{ paddingLeft: '900px' }}>
        <Link to="/About">
          <motion.img
            src="/astro.png"
            alt="Moving Image"
            style={{ width: 160, height: 160, position: 'fixed',  top : '60%', left: '100px', transform: 'translate(-50%, -50%)' }} // Adjust width and height as needed
            animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity },  }} // Image moves up and down in a cross pattern
          />
        </Link>
      </div>
      <div style={{ position: 'fixed', top: '80%', left: '110px', transform: 'translate(-50%, -50%)'}}>
        
        <motion.h4
          style={{ color: 'white' }}
          animate={{ y: [0, -15, 0, 15, 0], transition: { duration: 7, repeat: Infinity } }} // Text moves up and down in a cross pattern
        >
          About Me
        </motion.h4>
      </div>
      <div style={{ position: 'fixed', top: '65%', left: '1050px'}}>

      <motion.div
         whileHover={{ scale: 1.1, borderWidth: '5px' }} // Scale the image and increase border size on hover
          >
             <Link to='/Contact'>
               <motion.img
                 src="/earth.png"
                 alt="Rotating Earth"
                 style={{ width: 170, height: 170 }}
                 animate={{ rotate: [0, 360], transition: { duration: 100, loop: Infinity } }}
               />
             </Link>
            </motion.div>
      
    </div>
    <div style={{ position: 'fixed',  top: '72%', left: '1050px', transform: 'translate(-50%, -50%)'}}>
        <motion.h4
          style={{ color: 'white' }}
        >
          Contact
        </motion.h4>
      </div>

      <div style={{ position: 'fixed', top: '77%', left: '45%', transform: 'translate(-50%, -50%)' }}>
       <Link to='/service'>
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
       </Link>
      </div>
      <div style={{ position: 'fixed', top: '90%', left: '45%', transform: 'translate(-50%, -50%)'}}>
        <motion.h3
          style={{ color: 'white' }}
        >
          Service
        </motion.h3>
      </div>

      <div style={{position: 'fixed', left:'50%', top:'-20%'}}>
      <motion.img
          src="/programmer.png"
          alt="Twinkling Image"
          style={{ width: 600, height: 600, borderRadius: '50%' }}
          ></motion.img>
      </div>
      
    </div>
  );
};

export default Home;
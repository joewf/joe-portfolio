import { useState, useEffect } from 'react'
import './App.css'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import joe from '../public/joe.jpg'
import react from '../public/react.png'
import javascript from '../public/javascript.png'
import html from '../public/html.png'
import css from '../public/css.png'
import tailwind from '../public/tailwind.png'
import nodejs from '../public/nodejs.png'
import web1 from '../public/netflix-clone.jpg'
import web2 from '../public/e-store.jpg'
import web3 from '../public/resume-builder.jpg'
import web4 from '../public/pokemon-game.jpg'
import web5 from '../public/calculator.jpg'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Check screen width to determine if it's a mobile/small screen
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };


  return (
    <div className={darkMode ? "dark" : ""} >
      <main className="bg-white dark:bg-gray-900">
        <section id="home" className="min-h-screen">
          <div className="fixed w-full z-0">
            <nav className="bg-white py-6 flex justify-between px-20 dark:text-white dark:bg-gray-900 ">
              {/* Hamburger menu for mobile/small screens */}
              {isMobile ? (
                <div className="flex items-center justify-between w-full ">
                  <button onClick={() => setDarkMode(!darkMode)}>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={toggleMobileMenu}
                      className="ml-4 text-2xl font-burtons cursor-pointer"
                    >
                      ☰
                    </button>
                    {showMobileMenu && (
                      <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
                        <a
                          href="#home"
                          className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-burtons"
                        >
                          Home
                        </a>
                        <a
                          href="#portfolio"
                          className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-burtons"
                        >
                          Portfolio
                        </a>
                        <a
                          href="/public/resume_joe_wu.pdf"
                          download="resume_joe_wu.pdf"
                          className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-burtons"
                        >
                          Resume
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <ul className="flex gap-10">
                    <li><a href="#home" className="text-xl font-burtons cursor-pointer">Home</a></li>
                    <li><a href="#portfolio" className="text-xl font-burtons cursor-pointer">Portfolio</a></li>
                  </ul>
                  <ul className=" flex items-center"
                    onClick={() => setDarkMode(!darkMode)}>
                    <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
                    <li>
                      <a
                        className="bg-gradient-to-r from-cyan-500 to-teal-500  bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                        href="/public/resume_joe_wu.pdf"
                        download="resume_joe_wu.pdf">
                        Resume
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </nav>
          </div>
          <div className="text-center px-10 pt-40 pb-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Joe Wu</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer</h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto:joewu2701@gmail.com" className='text-4xl lg:text-5xl'><AiOutlineMail /></a>
            <a href="tel:778-917-8283" className='text-4xl lg:text-5xl'><FaPhone /></a>
            <a href="https://www.github.com/joewf" target="_blank" className='text-4xl lg:text-5xl'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/joe-wf/" target="_blank" className='text-4xl lg:text-5xl'><AiFillLinkedin /></a>
          </div>
          <div className="w-64 h-64 mx-auto bg-gradient-to-b from-teal-500 rounded-full my-20 overflow-hidden md:h-80 md:w-80 lg:w-96 lg:h-96">
            <img src={joe} className=' object-cover h-full w-full' />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-center">
            <div className="mb-1 text-center lg:text-center align-middle">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={html} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">HTML</h3>
            </div>
            <div className="mb-1 text-center">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={css} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">CSS</h3>
            </div>
            <div className="mb-1 text-center">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={javascript} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">JAVASCRIPT</h3>
            </div>
            <div className="mb-1 text-center">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={react} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">REACT</h3>
            </div>
            <div className="mb-1 text-center">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={tailwind} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">TAILWIND</h3>
            </div>
            <div className="mb-1 text-center">
              <img className="mx-auto lg:mb-2 lg:w-24 lg:h-24 w-16 h-16" src={nodejs} />
              <h3 className=" text-sm font-bold lg:text-xl dark:text-white">NODEJS</h3>
            </div>
          </div>
        </section>

        <section className="py-20 px-20 min-h-screen" id="portfolio">
          <h3 className="text-3xl py-1 mb-20 flex justify-center lg:text-3xl lg:py-1 lg:mb-20 font-burtons dark:text-white">Portfolio</h3>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-24">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-60">
                <div className="text-center min-w-96 flex flex-col justify-evenly">
                  <h2 className="font-bold lg:text-xl dark:text-white">NETFLIX CLONE</h2>
                  <div className="flex justify-around">
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">React <FontAwesomeIcon icon={faReact} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">CSS <FontAwesomeIcon icon={faCss3Alt} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                  </div>
                </div>
                <div>
                  <a href="https://netflix-clone-ec875.web.app/" target="_blank">
                    <img src={web1} className="w-full h-auto rounded-lg lg:min-h-80 lg:max-h-80 lg:min-w-520 lg:max-w-520 hover:scale-105 transition-transform cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
            <div className="my-24">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-60">
                <div className='order-2 lg:order-1'>
                  <a href="https://joewf.github.io/shopping-cart/" target="_blank">
                    <img src={web2} className="w-full h-auto rounded-lg lg:min-h-80 lg:max-h-80 lg:min-w-520 lg:max-w-520 hover:scale-105 transition-transform cursor-pointer" />
                  </a>
                </div>
                <div className="text-center min-w-96 flex flex-col justify-evenly order-1 lg:order-2">
                  <h2 className="font-bold lg:text-xl dark:text-white">FICTIONAL STORE</h2>
                  <div className="flex justify-around">
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">React <FontAwesomeIcon icon={faReact} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">Tailwind CSS <FontAwesomeIcon icon={faCss3Alt} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-24">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-60">
                <div className="text-center min-w-96 flex flex-col justify-evenly">
                  <h2 className="font-bold lg:text-xl dark:text-white">RESUME BUILDER</h2>
                  <div className="flex justify-around">
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">React <FontAwesomeIcon icon={faReact} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">CSS <FontAwesomeIcon icon={faCss3Alt} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                  </div>
                </div>
                <div>
                  <a href="https://joewf.github.io/resume-builder/" target="_blank">
                    <img src={web3} className="w-full h-auto max-h-56 rounded-lg lg:min-h-80 lg:max-h-80 lg:min-w-520 lg:max-w-520 hover:scale-105 transition-transform cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
            <div className="my-24">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-60">
                <div className='order-2 lg:order-1'>
                  <a href="https://joewf.github.io/pokemon-game/" target="_blank">
                    <img src={web4} className="w-full h-auto rounded-lg lg:min-h-80 lg:max-h-80 lg:min-w-520 lg:max-w-520 hover:scale-105 transition-transform cursor-pointer" />
                  </a>

                </div>
                <div className="text-center min-w-96 flex flex-col justify-evenly order-1 lg:order-2">
                  <h2 className="font-bold lg:text-xl dark:text-white">POKEMON GAME</h2>
                  <div className="flex justify-around">
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">React <FontAwesomeIcon icon={faReact} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">CSS <FontAwesomeIcon icon={faCss3Alt} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-24">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-60">
                <div className="text-center min-w-96 flex flex-col justify-evenly">
                  <h2 className="font-bold lg:text-xl dark:text-white">CALCULATOR</h2>
                  <div className="flex justify-around">
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">React <FontAwesomeIcon icon={faReact} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                    <span className="text-sm flex gap-1 items-center dark:text-white lg:text-lg">CSS <FontAwesomeIcon icon={faCss3Alt} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /></span>
                  </div>
                </div>
                <div>
                  <a href="https://joewf.github.io/calculator/" target="_blank">
                    <img src={web5} className="w-full h-auto max-h-56 rounded-lg lg:min-h-80 lg:max-h-80 lg:min-w-520 lg:max-w-520 hover:scale-105 transition-transform cursor-pointer" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >

  );
}

export default App

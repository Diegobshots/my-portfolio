'use client';
import Head from "next/head"
import { BsCloudMoon } from "react-icons/bs"
import { BsSun } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"

import rockIco from "../public/rock.ico"
import greetIco from "../public/greet.ico"

import ProfilePic from "@/components/animated/ProfilePic"
import { SiNetlify } from "react-icons/si"

import Image from "next/image"
import diego from "../public/profilePic.png"
import todo from "../public/todo-app.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const [animateTheme, setAnimateTheme] = useState(false)

  const [favIcon, setFavIcon] = useState(greetIco.src)

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible") {
        setFavIcon(rockIco.src)
      } else {
        setFavIcon(greetIco.src)
      }
    })
  }, []);

  

  return (
    
    <div className={`${darkMode ? "dark" : ""} font-source`}>
      <Head>
        <title>Diego Blanco López | Web Developer</title>
        <meta name="description" content="Web developer based on Spain. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favIcon} />
      </Head>
      <main className="dark:bg-midBlack bg-white px-10 md:px-20 lg:px-60 h-full">
        <section className="min-h-screen">
          <nav className="shadow-lg backdrop-blur-sm lg:px-40  flex justify-between py-19 bg-white/60 dark:bg-midBlack/30 py-7 px-7 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
            <h1 className="dark:text-white text-midBlack text-xl ">
              diego-blan.co
            </h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? (
                  <BsCloudMoon
                    onClick={() => setDarkMode(!darkMode)}
                    className={`dark:text-white cursor-pointer text-2xl `}
                  />
                ) : (
                  <BsSun
                    onClick={() => setDarkMode(!darkMode)}
                    className={`dark:text-white cursor-pointer text-2xl `}
                  />
                )}
              </li>
              <li>
                <a
                  className="hover:scale-110 bg-red text-white  px-4 py-2 rounded-md ml-8 text-sm md:text-lg"
                  href="mailto:blancolopez94@gmail.com"
                >
                  Get in touch 👈
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 pt-40 flexcol xl:flex xl:items-center xl:justify-center">
            <div className="relative xl:flex-col xl:justify-end h-full xl:pt-20  xl:pl-28">
              <motion.div className="circle absolute left-full  rounded-full blur-3xl h-80 w-96 bg-fourthLight dark:bg-red z-0 "
                animate={{
                  x: [0, 50, 90, -20, 45, -100, 0],
                  y: [0, -50, 95, -40, 20],
                  opacity: [0, 0.5, 0.8, 0.5, 0.2, 0.5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              ></motion.div>
              <motion.div className="circle absolute -left-8 top-1/3  rounded-full blur-2xl h-60 w-60 bg-orange z-0 "
                animate={{
                  x: [0, -20, 200, -40, 0],
                  y: [0, -50, 95, -40, 0],
                  opacity: [0, 0.1, 0.2, 0.5, 0],
                  scale: [1, 1.2, 1.5, 1.2, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              ></motion.div>
              <motion.h2 className="relative dark:text-white text-5xl py-2 font-medium md:text-6xl z-10"
                animate={{ y: [-100, 0] }} 
              >
                Hi! I&apos;m Diego Blanco
              </motion.h2>
              <h3 className="relative text-red text-2xl py-2 md:text-3xl">
                Full stack developer.
              </h3>
              <p className="relative text-midWhite text-md py-5 leading-8  md:text-xl max-w-xl mx-auto">
                Experience on working with modern UI libraries and frameworks
                for building web apps.
              </p>
              <div className="relative text-5xl flex justify-center gap-16 py-3 text-midWhite">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/diegoblancolopez/"
                >
                  <AiFillLinkedin className="hover:text-red cursor-pointer" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.github.com/diegobshots/"
                >
                  <AiFillGithub className="hover:text-red cursor-pointer" />
                </Link>
              </div>
            </div>
            <ProfilePic className="relative z-10" 
              
            >
              <Image
                src={diego}
                width="auto"
                height="auto"
                alt="Diego Blanco"
              />
            </ProfilePic>
          </div>
        </section>

        <section>
          <div>
            <h3 className="dark:text-white text-4xl py-1">Projects</h3>
            <p className="text-lg py-2 leading-8 text-midWhite  dark:text-gray-400">
              Here, you can see my projects. Some of them were developed in a
              professional environment, and due to protected rights, I am unable
              to showcase or link to their repositories. Nevertheless, I can
              explain how I developed them and the technologies I used. However,
              others were developed by me and are completely open-source and
              public.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div>
              <div className="dark:bg-black text-center shadow-lg p-10 rounded-xl my-10 transition-transform">
                <h3 className="dark:text-white text-2xl font-medium pt-8 pb-2">
                  React ToDo App
                </h3>
                <p className="text-midWhite py-2">
                  The primary objective of developing this TODO app is to gain a
                  better understanding of React Js fundamentals and to
                  incorporate an external API.
                </p>
                <h4 className=" py-3 text-red text-lg">Technologies I used</h4>
                <p className="dark:text-midWhite text-gray-800 py-1">React</p>
                <p className="dark:text-midWhite text-gray-800 py-1">
                  Material UI
                </p>
                <Link
                  href="https://delightful-druid-1164d7.netlify.app/"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 w-full mb-2 flex justify-center items-center mt-4">
                    View deploy
                    <SiNetlify className="ml-2" />
                  </button>
                </Link>
                <Link
                  href="https://github.com/Diegobshots/todo-app/tree/master"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 flex justify-center items-center w-full">
                    View repo
                    <AiFillGithub className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="dark:bg-black text-center shadow-lg p-10 rounded-xl my-10 transition-transform max-w-3xl">
                <h3 className="dark:text-white text-2xl font-medium pt-8 pb-2">
                  Kitten Facts
                </h3>
                <p className="text-midWhite py-2">
                  This is an app designed for concatenating multiple
                  asynchronous requests. It displays random facts and searches
                  for a kitten picture based on the first three words of the
                  given fact.
                </p>
                <h4 className=" py-3 text-red text-lg">Technologies I used</h4>
                <p className="dark:text-midWhite text-gray-800 py-1">React</p>
                <Link
                  href="https://quiet-toffee-38a699.netlify.app/"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 w-full mb-2 flex justify-center items-center mt-4">
                    View deploy
                    <SiNetlify className="ml-2" />
                  </button>
                </Link>
                <Link
                  href="https://github.com/Diegobshots/kitten-facts"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 flex justify-center items-center w-full">
                    View repo
                    <AiFillGithub className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="dark:bg-black text-center shadow-lg p-10 rounded-xl my-10 transition-transform max-w-5xl ">
                <h3 className="dark:text-white text-2xl font-medium pt-8 pb-2">
                  API REST Login Active Directory
                </h3>
                <p className="text-midWhite py-2 ">
                  Here, I identified the need to simplify the login process in
                  my company. We have multiple projects with different login
                  methods and redundant databases. Therefore, I decided to
                  develop an API that could directly communicate with my
                  company&apos;s Active Directory and integrate a simple REST
                  API login with all our projects. This way, all employees could
                  access all internal projects and tools using a single account.
                </p>
                <h4 className=" py-3 text-red text-lg">Technologies I used</h4>
                <p className="dark:text-midWhite text-gray-800 py-1">Node JS</p>
                <p className="dark:text-midWhite text-gray-800 py-1">Express</p>
                <p className="dark:text-midWhite text-gray-800 py-1">JWT</p>
                <p className="dark:text-midWhite text-gray-800 py-1">
                  ldap-authentication package
                </p>
              </div>
            </div>
            <div>
              <div className="dark:bg-black text-center shadow-lg p-10 rounded-xl my-10 transition-transform ">
                <h3 className="dark:text-white text-2xl font-medium pt-8 pb-2">
                  React Shop
                </h3>
                <p className="text-midWhite py-2">
                  In this project I learned how to use context, reducers and
                  custom hooks to handle the global state of the app.
                </p>
                <h4 className=" py-3 text-red text-lg">Technologies I used</h4>
                <p className="dark:text-midWhite text-gray-800 py-1">React</p>
                <p className="dark:text-midWhite text-gray-800 py-1">
                  Tailwindcss
                </p>
                <p className="dark:text-midWhite text-gray-800 py-1">Vite</p>

                <Link
                  href="https://unique-begonia-553e1e.netlify.app/"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 w-full mb-2 flex justify-center items-center mt-4">
                    View deploy
                    <SiNetlify className="ml-2" />
                  </button>
                </Link>
                <Link
                  href="https://github.com/Diegobshots/react-shop"
                  target="_blank"
                >
                  <button className="dark:bg-red bg-black text-white rounded-lg py-3 px-5 flex justify-center items-center w-full">
                    View repo
                    <AiFillGithub className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

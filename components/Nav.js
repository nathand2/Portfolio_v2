import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { AiFillFile } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaHome, FaUserAlt } from "react-icons/fa";
import { HiOutlineMail, HiMenu, HiEye } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={navStyles.nav}>
        <div>

          <div className={navStyles.logo_container}>
            <Link href="/" className={navStyles["logo-main"]}>
              <Image src="/logo.png" alt={"logo"} width="40" height="20" priority />
            </Link>
          </div>

          <ul className={navStyles["links-list"]}>
            <li>
              <Link href="/" className={navStyles.header_link}>
                <FaHome className={navStyles.icon} />
                <h1 className={navStyles.nav_titles}>Home</h1>
              </Link>
            </li>
            <li>
              {
                <Link href="/projects" className={navStyles.header_link}>
                  <GoFileDirectory className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Projects</h1>
                </Link>
              }
            </li>
            <li>
              {
                <Link href="/eyes" className={navStyles.header_link}>
                  <HiEye className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>20-20-20</h1>
                </Link>
              }
            </li>
            {/* <li>
              {
                <Link href="/devlog/gouken" className={navStyles.header_link}>
                  <HiEye className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Test</h1>
                </Link>
              }
            </li> */}
          </ul>
        </div>
        <span></span>
        <div>
          
        </div>
        <div>

          <ul className={navStyles["social-links"]}>
            <li>
              <a
                href="https://github.com/NathanD2"
                target="_blank"
                rel="noopener noreferrer"
                // className="main-graphic-link"
                className={navStyles.header_link}
              >
                <FaGithub className={navStyles["icon"]} />
                <h1 className={navStyles.nav_titles}>Github</h1>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nathandong-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="main-graphic-link"
              >
                <FaLinkedin className={navStyles["icon"]} />
                <h1 className={navStyles.nav_titles}>LinkedIn</h1>
              </a>
            </li>
            <li>
              <a
                href="mailto:nate.dong97@gmail.com"
                className="main-graphic-link"
              >
                <HiOutlineMail className={navStyles["icon"]} />
                <h1 className={navStyles.nav_titles}>Email</h1>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

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
        <div className={navStyles.logo_container}>
          <Link href="/" className={navStyles["logo-main"]}>
            <Image src="/logo.png" alt={"logo"} width="40" height="20" priority />
          </Link>
        </div>

        <ul className={navStyles["links-list"]}>
          <li>
            <Link href="/" className="header-link">
              <FaHome className={navStyles.icon} />
              <h1 className={navStyles.nav_titles}>Home</h1>
            </Link>
          </li>
          <li>
            {
              <Link href="/projects" className="header-link">
                <GoFileDirectory className={navStyles.icon} />
                <h1 className={navStyles.nav_titles}>Projects</h1>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/about" className="header-link">
                <FaUserAlt className={navStyles.icon} />
                <h1 className={navStyles.nav_titles}>About Me</h1>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/education" className="header-link">
                <MdSchool className={navStyles.icon} />
                <h1 className={navStyles.nav_titles}>Education</h1>
              </Link>
            }
          </li>
          {/* <li>
            <Link
              href="/Nathan_Dong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              <AiFillFile className={navStyles.icon} />
              <h1 className={navStyles.nav_titles}>Resume</h1>
            </Link>
          </li> */}
          <li>
            {
              <Link href="/eyes" className="header-link">
                <HiEye className={navStyles.icon} />
                <h1 className={navStyles.nav_titles}>20-20-20</h1>
              </Link>
            }
          </li>
        </ul>
        <span></span>

        <ul className={navStyles["social-links"]}>
          <li>
            <a
              href="https://github.com/NathanD2"
              target="_blank"
              rel="noopener noreferrer"
              className="main-graphic-link"
            >
              <FaGithub className={navStyles["info-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nathandong-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="main-graphic-link"
            >
              <FaLinkedin className={navStyles["info-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="mailto:nate.dong97@gmail.com"
              className="main-graphic-link"
            >
              <HiOutlineMail className={navStyles["info-icon"]} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

import Link from "next/link";
import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiMenu } from "react-icons/hi";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={navStyles.nav}>
        <Link href="/" className={navStyles["logo-main"]} passHref>
          <a>
            <h1>
              <span className={navStyles["logo-text-bold"]}>{"Nathan"}</span>
              <span className={navStyles["logo-text-normal"]}>{"Dong"}</span>
            </h1>
          </a>
        </Link>

        <ul className={navStyles["links-list"]}>
          <li>
            <Link href="/" className="header-link" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            {
              <Link href="/projects" className="header-link" passHref>
                <a>Projects</a>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/about" className="header-link" passHref>
                <a>About Me</a>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/education" className="header-link" passHref>
                <a>Education</a>
              </Link>
            }
          </li>
          <li>
            <Link
              href="/Nathan_Dong_Resume.pdf"
              className="header-link"
              passHref
            >
              <a>Resume</a>
            </Link>
          </li>
          <li>
            {
              <Link href="/eyes" className="header-link" passHref>
                <a>20-20-20</a>
              </Link>
            }
          </li>
        </ul>
        <span></span>

        <ul className={navStyles["social-links"]}>
          <li>
            <a href="https://github.com/NathanD2" className="main-graphic-link">
              <FaGithub className={navStyles["info-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nathandong-dev/"
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

      {/* Collapsed Navbar */}
      <nav className={navStyles.nav_menu}>
        <Link href="/" className={navStyles["logo-main"]} passHref>
          <a>
            <h1>
              <span className={navStyles["logo-text-bold"]}>{"Nathan"}</span>
              <span className={navStyles["logo-text-normal"]}>{"Dong"}</span>
            </h1>
          </a>
        </Link>

        {/* <ul className={navStyles["social-links"]}>  
          <li> */}
            <HiMenu onClick={openMenu} className={navStyles.btnmenu} />
          {/* </li>
        </ul> */}
      </nav>

      {/* {showMenu && ( */}
      <nav className={showMenu ? navStyles.menu_show : navStyles.menu_hide}>
        <ul className={navStyles.menu_links_list}>
          <li>
            <Link href="/" className="header-link" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            {
              <Link href="/about" className="header-link" passHref>
                <a>About Me</a>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/education" className="header-link" passHref>
                <a>Education</a>
              </Link>
            }
          </li>
          <li>
            <Link
              href="/Nathan_Dong_Resume.pdf"
              className="header-link"
              passHref
            >
              <a>Resume</a>
            </Link>
          </li>
          <li>
            {
              <Link href="/eyes" className="header-link" passHref>
                <a>20-20-20</a>
              </Link>
            }
          </li>
          <li>
            <ul className={navStyles.menu_social_links}>
              <li>
                <a
                  href="https://github.com/NathanD2"
                  className="main-graphic-link"
                >
                  <FaGithub className={navStyles["info-icon"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nathandong-dev/"
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
          </li>
        </ul>
      </nav>
      {/* )} */}
    </>
  );
};

export default Nav;

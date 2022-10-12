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
          <Link href="/" className={navStyles["logo-main"]} passHref>
            <a>
              <Image src="/logo.png" alt={"logo"} width="40px" height="20px" />
            </a>
          </Link>
        </div>

        <ul className={navStyles["links-list"]}>
          <li>
            <Link href="/" className="header-link" passHref>
              <a>
                <FaHome className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Home</h1>
              </a>
            </Link>
          </li>
          <li>
            {
              <Link href="/projects" className="header-link" passHref>
                <a>
                  <GoFileDirectory className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Projects</h1>
                </a>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/about" className="header-link" passHref>
                <a>
                  <FaUserAlt className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>About Me</h1>
                </a>
              </Link>
            }
          </li>
          <li>
            {
              <Link href="/education" className="header-link" passHref>
                <a>
                  <MdSchool className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Education</h1>
                </a>
              </Link>
            }
          </li>
          <li>
            <Link
              href="/Nathan_Dong_Resume.pdf"
              className="header-link"
              passHref
            >
              <a>
                <AiFillFile className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>Resume</h1>
              </a>
            </Link>
          </li>
          <li>
            {
              <Link href="/eyes" className="header-link" passHref>
                <a>
                  <HiEye className={navStyles.icon} />
                  <h1 className={navStyles.nav_titles}>20-20-20</h1>
                </a>
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
      {/* <nav className={navStyles.nav_menu}>
        <Link href="/" className={navStyles["logo-main"]} passHref>
          <a>
            <h1>
              <span className={navStyles["logo-text-bold"]}>{"Nathan"}</span>
              <span className={navStyles["logo-text-normal"]}>{"Dong"}</span>
            </h1>
          </a>
        </Link>
            <HiMenu onClick={openMenu} className={navStyles.btnmenu} />
      </nav> */}

      {/* <nav className={showMenu ? navStyles.menu_show : navStyles.menu_hide}>
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
      </nav> */}
      {/* )} */}
    </>
  );
};

export default Nav;

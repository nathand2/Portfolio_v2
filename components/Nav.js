import Link from "next/link";

import { TiLocation } from 'react-icons/ti'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <a href="/" className={navStyles['logo-main']}>
        <h1 className={navStyles['logo-text-bold']}>{"Nathan"}</h1>
        <h1 className={navStyles['logo-text-normal']}>{"Dong"}</h1>
      </a>
      
      <ul className={navStyles['links-list']}>
        {/* <li>
          {
            <Link href="/" className="header-link">
              <h3>Home</h3>
            </Link>
          }
        </li> */}
        <li>
          {
            <Link href="/#projects" className="header-link">
              <h3>Projects</h3>
            </Link>
          }
        </li>
        <li>
          {
            <Link href="/#about" className="header-link">
              <h3>About</h3>
            </Link>
          }
        </li>
        <li>
          <a href="/#pdf" className="header-link">
            <h3>Resume</h3>
          </a>
        </li>
      </ul>
      <span></span>
      
      <ul className={navStyles["social-links"]}>
        <li>
        <a href="https://github.com/NathanD2" className='main-graphic-link'>
          <FaGithub className={navStyles["info-icon"]} />
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/nathandong-dev/" className='main-graphic-link'>
          <FaLinkedin className={navStyles["info-icon"]} />
        </a>
        </li>
        <li>
        <a href="mailto:nate.dong97@gmail.com" className='main-graphic-link'>
          <HiOutlineMail className={navStyles["info-icon"]} />
        </a>
        </li>
      </ul>


      {/* <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;

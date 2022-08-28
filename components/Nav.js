import Link from "next/link";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/" className={navStyles['logo-main']} passHref>
        <a>
          <h1><span className={navStyles['logo-text-bold']}>{"Nathan"}</span><span className={navStyles['logo-text-normal']}>{"Dong"}</span></h1>
        </a>
      </Link>
      
      <ul className={navStyles['links-list']}>
        <li>
          <Link href="/Nathan_Dong_Resume.pdf" className="header-link" passHref>
            <a>Resume</a>
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

import { useState } from 'react';
import { HiCode, HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { sections } from '../../constants';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <HiCode />
        &nbsp;Islam Dudaev&nbsp;
        <HiCode />
      </div>
      <ul className="app__navbar-links">
        {sections.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div className="dot" />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/islamdudaev/" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="http://www.github.com/islam95" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href="mailto:contact@islamdudaev.com">
      <MdEmail />
    </a>
  </div>
);

export default SocialMedia;

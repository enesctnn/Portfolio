import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';

export const ACCOUNTS: { platform: string; icon: IconType; href: string }[] = [
  {
    platform: 'Linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/muhammet-enes-%C3%A7etin-35112b279/',
  },
  { platform: 'Github', icon: FaGithub, href: 'https://github.com/enesctnn' },
  {
    platform: 'Medium',
    icon: FaMedium,
    href: 'https://medium.com/@enespcetin',
  },
  {
    platform: 'Twitter X',
    icon: RiTwitterXLine,
    href: 'https://twitter.com/enespcetin',
  },
];

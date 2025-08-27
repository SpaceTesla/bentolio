import { socialLinks } from '@/data/socialLinks';
import { LuGithub, LuLinkedin, LuInstagram, LuFigma } from 'react-icons/lu';

import { RiTwitterXLine } from 'react-icons/ri';
import { FaFigma } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

import Link from 'next/link';

const iconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  x: RiTwitterXLine,
  instagram: LuInstagram,
  figma: FaFigma,
  medium: FaMedium,
};

export default function SocialLinks() {
  return (
    <div className="flex h-full w-full items-center justify-around">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:bg-secondary hover:text-foreground rounded-[8px] p-2 transition-colors duration-300"
          >
            <Icon className="h-6 w-6" />
          </Link>
        );
      })}
    </div>
  );
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SpaceTesla',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shivansh-karan',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    // TODO: Create a twitter account
    url: 'https://twitter.com/',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/shivanshk.dev',
    icon: 'instagram',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/@spacetesla',
    icon: 'figma',
  },
  {
    name: 'Medium',
    url: 'https://spacetesla.medium.com/',
    icon: 'medium',
  },
];

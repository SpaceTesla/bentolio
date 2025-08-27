import { LuMail, LuLinkedin, LuGithub, LuInstagram } from 'react-icons/lu';

const items = [
  {
    icon: LuMail,
    label: 'shivansh.karan@gmail.com',
    href: 'mailto:shivansh.karan@gmail.com',
  },
  {
    icon: LuLinkedin,
    label: '/in/shivansh-karan/',
    href: 'https://www.linkedin.com/in/shivansh-karan/',
  },
  {
    icon: LuGithub,
    label: '/SpaceTesla/',
    href: 'https://github.com/SpaceTesla',
  },
  {
    icon: LuInstagram,
    label: '@shivanshk.dev',
    href: 'https://instagram.com/shivanshk.dev',
  },
];

export default function ReachMe() {
  return (
    <div className="bg-primary hide-scrollbar h-full overflow-y-auto rounded-[20px] p-6">
      <h3 className="mb-4 text-xl font-semibold">Other Ways to Reach Me</h3>
      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="bg-secondary/20 hover:bg-secondary/40 flex items-center gap-3 rounded-[12px] p-3 transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

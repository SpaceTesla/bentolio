'use client';

import { LuArrowUpRight } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className="bg-accent relative h-full w-full cursor-pointer rounded-[20px] text-left"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Contact Shivansh Karan - Ready to elevate your digital presence"
      role="button"
      tabIndex={0}
    >
      <div className="absolute top-8 left-8 text-sm font-light">
        Ready to elevate your <br /> digital presence?
      </div>
      <div className="absolute bottom-8 left-8 text-[56px] leading-tight font-semibold max-lg:text-4xl max-md:text-3xl">
        Let's Talk
      </div>
      <LuArrowUpRight
        className="absolute top-6 right-6 text-5xl max-lg:text-4xl max-md:text-3xl"
        strokeWidth={1}
        aria-hidden="true"
      />
    </button>
  );
}

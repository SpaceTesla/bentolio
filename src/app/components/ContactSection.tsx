'use client';

import { LuArrowUpRight } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  return (
    <div
      id="contact"
      className="bg-accent relative col-span-4 row-span-4 cursor-pointer rounded-[20px]"
      onClick={() => {
        router.push('/contact');
      }}
    >
      <div className="absolute top-8 left-8 text-sm font-light">
        Ready to elevate your <br /> digital presence?
      </div>
      <div className="absolute bottom-8 left-8 text-[56px] leading-tight font-semibold">
        Let's Talk
      </div>
      <LuArrowUpRight
        className="absolute top-6 right-6 text-5xl"
        strokeWidth={1}
      />
    </div>
  );
}

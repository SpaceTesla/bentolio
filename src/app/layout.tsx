import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default:
      'Shivansh Karan - Full Stack Developer & Software Engineer | Bangalore',
    template: '%s | Shivansh Karan - Full Stack Developer',
  },
  description:
    'Shivansh Karan is a Bangalore-based Full Stack Developer, Software Engineer, and DevOps Engineer specializing in Next.js, React, Python, and cloud technologies. View portfolio of web apps, Chrome extensions, and scalable systems.',
  keywords: [
    'Shivansh Karan',
    'Software Engineer',
    'Full Stack Developer',
    'Web Developer',
    'DevOps Engineer',
    'Cloud Engineer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Python Developer',
    'Next.js',
    'React.js',
    'TailwindCSS',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'FastAPI',
    'Flask',
    'PostgreSQL',
    'Redis',
    'Kafka',
    'RabbitMQ',
    'AWS',
    'Cloudflare R2',
    'Docker',
    'Kubernetes',
    'Microservices',
    'REST API',
    'GraphQL',
    'CI/CD',
    'DevOps Automation',
    'Chrome Extension Developer',
    'Mivro',
    'JuRIDEX',
    'PayZee',
    'Orbis',
    'Anthrapi CTO',
    'Internship Portal',
    'Clean Code',
    'Scalable Architecture',
    'System Design',
    'AI Agents',
    'Open Source',
    'API Development',
    'Automation Tools',
    'Cloud Infrastructure',
    'Web App Development',
    'Bangalore Software Engineer',
    'Full Stack Developer India',
    'Cloud DevOps Engineer Portfolio',
    'Python Backend Developer',
    'Next.js Developer Portfolio',
  ],
  authors: [{ name: 'Shivansh Karan' }],
  creator: 'Shivansh Karan',
  publisher: 'Shivansh Karan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shivanshkaran.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivanshkaran.tech',
    title:
      'Shivansh Karan - Full Stack Developer & Software Engineer | Bangalore',
    description:
      'Shivansh Karan is a Bangalore-based Full Stack Developer, Software Engineer, and DevOps Engineer specializing in Next.js, React, Python, and cloud technologies.',
    siteName: 'Shivansh Karan Portfolio',
    images: [
      {
        url: '/myself.jpg',
        width: 1200,
        height: 630,
        alt: 'Shivansh Karan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Shivansh Karan - Full Stack Developer & Software Engineer | Bangalore',
    description:
      'Shivansh Karan is a Bangalore-based Full Stack Developer, Software Engineer, and DevOps Engineer specializing in Next.js, React, Python, and cloud technologies.',
    images: ['/myself.jpg'],
    creator: '@shivanshkaran',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 't5lF5iSG9toX75Ozj7irxnkFDiSn31XGeuLPVviQ1rM',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/myself.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shivansh Karan" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="application-name" content="Shivansh Karan Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Shivansh Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

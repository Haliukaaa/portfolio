'use client';
import ChatInterface from '@/components/chatbot-interface';
import Approach from '../components/approach';
import Clients from '../components/clients';
import Experience from '../components/experience';
import Hero from '../components/hero';
import { Footer } from '@/components/footer';
import Grid from '@/components/grid';
import RecentProjects from '@/components/recent-projects';
import { FloatingNav } from '@/components/ui/floating-nav';
import { navItems } from '@/data';
import useDownloader from "react-use-downloader";
export default function Home() {
  const {download} =useDownloader();
  const fileUrl = "/CV.pdf";
  const filename = "CV.pdf";
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
    <div className="w-full max-w-7xl">
        <button onClick={() => download(fileUrl, filename)} className="fixed top-5 right-5 inline-flex h-12 z-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Download CV
        </button>
        <ChatInterface />
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </div>
  </main>
  );
}

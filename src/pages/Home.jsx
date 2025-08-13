import React from 'react';
import Hero3D from '../components/Hero3D';
import Introduction from '../components/Introduction';
import QuoteMarquee from '../components/QuoteMarquee';
import ProjectGallery from '../components/ProjectGallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero3D />
      <Introduction />
      <QuoteMarquee />
      <ProjectGallery /> 
      <Footer />
    </>
  );
}

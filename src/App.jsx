import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import WelcomeSplash from './components/WelcomeSplash';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Missions from './components/Missions';
import CallingCard from './components/ContactCard';

export default function App() {

  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <div className="min-h-screen bg-black font-sans select-none overflow-hidden relative">

      {/* AnimatePresence permite hacer animaciones al desmontar (eliminar) un componente */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeSplash onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {/* <Navbar/> En caso de añadirlo en un futuro*/}

      <main>
        <Hero />
        <Stats />
        <Missions />
        <CallingCard />
      </main>

      <Analytics />
    </div>
  )
}
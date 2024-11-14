import Game from './components/Game.tsx';

import { ToastContainer } from 'react-toastify';
import a16zImg from '../assets/a16z.png';
import convexImg from '../assets/convex.svg';
import starImg from '../assets/star.svg';
import helpImg from '../assets/help.svg';
// import { UserButton } from '@clerk/clerk-react';
// import { Authenticated, Unauthenticated } from 'convex/react';
// import LoginButton from './components/buttons/LoginButton.tsx';
import { useState } from 'react';
import ReactModal from 'react-modal';
import MusicButton from './components/buttons/MusicButton.tsx';
import Button from './components/buttons/Button.tsx';
import InteractButton from './components/buttons/InteractButton.tsx';
import FreezeButton from './components/FreezeButton.tsx';
import { MAX_HUMAN_PLAYERS } from '../convex/constants.ts';
import PoweredByConvex from './components/PoweredByConvex.tsx';

export default function Home() {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between font-body ">
      <header className="absolute top-0 w-full flex justify-between items-center p-4  z-10">
        {/* <h1 className="text-white text-2xl font-pixel">Society.fun</h1> */}
        <div className="flex gap-2">
          {/* <Authenticated>
            <UserButton afterSignOutUrl="/ai-town" />
          </Authenticated>

          <Unauthenticated>
            <LoginButton />
          </Unauthenticated> */}
          {/* <Button imgUrl={helpImg} onClick={() => setHelpModalOpen(true)}>
              Help
            </Button> 
            go back to this later*/}
        </div>
      </header>
      {/*<div className="p-3 absolute top-0 right-0 z-10 text-2xl">
        
      </div> */}

      <div className="w-full lg:h-screen relative isolate overflow-hidden lg:p-8 shadow-2xl flex flex-col justify-start">
        <Game />

        <footer className="justify-center bottom-0 left-0 w-full flex items-center mt-4 gap-3 p-6 flex-wrap pointer-events-none">
          <div className="flex ">
            <InteractButton />
          </div>
        </footer>
        {/* <ToastContainer position="bottom-right" autoClose={2000} closeOnClick theme="dark" /> */}
      </div>
    </main>
  );
}

const modalStyles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 75%)',
    zIndex: 12,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50%',

    border: '10px solid rgb(23, 20, 33)',
    borderRadius: '0',
    background: 'rgb(35, 38, 58)',
    color: 'white',
    fontFamily: '"Upheaval Pro", "sans-serif"',
  },
};

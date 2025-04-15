// pages/welcome.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function WelcomeScreen() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0E5D8] text-[#2F3A48] p-6">
      {show && (
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="mb-6">
            <img src="/icon-180.png" alt="Convo Coach Icon" className="w-16 h-16" />
          </div>

          <h1 className="text-3xl font-bold mb-2 text-[#2F3A48]">Welcome to Convo Coach</h1>

          <p className="text-center max-w-md text-[#4A90E2] mb-6">
            Build emotional intelligence through real relationship scenarios.
            Practice, learn, and respond better — one convo at a time.
          </p>

          <button
            onClick={() => router.push('/app')}
            aria-label="Start using Convo Coach"
            className="bg-[#4A90E2] hover:bg-[#3C7BCC] text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md transition"
          >
            Get Started
          </button>
        </motion.main>
      )}
    </div>
  );
}

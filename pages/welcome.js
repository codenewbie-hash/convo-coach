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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0E5D8] text-[#2F3A48] px-6 py-10">
      {show && (
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center w-full max-w-md"
        >
          <div className="mb-6">
            <img src="/icon-180.png" alt="Convo Coach Icon" className="w-20 h-20" />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-[#2F3A48]">Welcome to Convo Coach</h1>

          <p className="text-base text-[#4A90E2] mb-8 px-2">
            Build emotional intelligence through real relationship scenarios. Practice, learn,
            and respond better — one convo at a time.
          </p>

          <button
            onClick={() => router.push('/app')}
            aria-label="Start using Convo Coach"
            className="bg-[#4A90E2] hover:bg-[#3C7BCC] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition w-full"
          >
            Get Started
          </button>
        </motion.main>
      )}
    </div>
  );
}

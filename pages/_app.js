import { useEffect } from 'react'; // ✅ Add this if missing
import '@/styles/globals.css';     // or whatever else is at the top

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        console.log("✅ Service Worker is ready!");
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

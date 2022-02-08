import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={true} exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)} >
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  );
}

export default MyApp;

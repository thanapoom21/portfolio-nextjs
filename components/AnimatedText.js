import { SplitText } from "../components/SplitText";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedText = ({ children, animateScale }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={animateScale}
          exit={{ opacity: 0 }}
        >
          <SplitText
            splitBy=" "
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: i => ({
                y: 0,
                transition: {
                  delay: i * 0.05,
                },
              }),
            }}
          >
            {children}
          </SplitText>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedText;

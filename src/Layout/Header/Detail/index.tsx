import { ReactElement } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

function HeaderDetail({ showDetail }): ReactElement {
  const variants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    target: {
      opacity: 1,
      height: 400,
    },
    end: {
      height: 0,
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      {showDetail && (
        <StyeldBack
          variants={variants}
          initial="initial"
          exit="end"
          animate="target"
          transition={{ ease: "easeIn", duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  );
}

const StyeldBack = styled(motion.div)(({ theme }) => {
  return {
    width: "100%",
    background: "pink",
    position: "relative",
    zIndex: 999,
  };
});

export default HeaderDetail;

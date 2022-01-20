import React from "react";
import { motion } from "framer-motion";

export function SplitText({ children, splitBy, ...rest }) {
  let words = children.split(splitBy);
  return words.map((word, i) => {
    return (
      <div
        className="text-4xl md:text-6xl font-bold md:leading-snug"
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.span
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.span>
      </div>
    );
  });
}

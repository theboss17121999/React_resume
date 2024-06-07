import * as React from "react";
import { motion } from "framer-motion";

// Define the Props interface with React.ReactNode for flexibility
interface Props {
  children: React.ReactNode;
}

// Define the container animation variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Define the item animation variants
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Define the Example component with motion applied to each child
export const Example = ({ children }: Props) => (
  <motion.ul
    className="container flex flex-wrap list-none"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {React.Children.map(children, (child, index) => (
      <motion.li
        key={index}
        className="item bg-gray-200 text-gray-600 rounded-lg py-3 px-4 mr-4 mb-4 text-sm md:text-base font-semibold lg:hover:bg-purple-500 lg:hover:text-white lg:duration-300"
        variants={item}
      >
        {child}
      </motion.li>
    ))}
  </motion.ul>
);

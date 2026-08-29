import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export default function Reveal({
  children,
  as = "div",
  type = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[type]}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className = "", stagger = 0.09, delay = 0, once = true, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", type = "up" }) {
  return (
    <motion.div className={className} variants={variants[type]} transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

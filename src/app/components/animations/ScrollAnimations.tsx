import React, { ReactNode } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

// Animation variants
const animationVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.4 },
    },
  },
  flipIn: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },
};

// Type definitions
type AnimationType = keyof typeof animationVariants;

interface ScrollAnimationProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "viewport" | "variants" | "transition"
  > {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

interface StaggerContainerProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "viewport" | "variants"
  > {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

interface StaggerItemProps
  extends Omit<HTMLMotionProps<"div">, "variants" | "transition"> {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
}

interface ParallaxScrollProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "viewport" | "transition"
  > {
  children: ReactNode;
  yOffset?: number;
  className?: string;
}

interface CounterAnimationProps
  extends Omit<
    HTMLMotionProps<"span">,
    "initial" | "whileInView" | "viewport" | "transition" | "onUpdate"
  > {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

// Main ScrollAnimation component
export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = "fadeInUp",
  duration = 0.8,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.1,
  ...props
}) => {
  const variant = animationVariants[animation] || animationVariants.fadeInUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1], // Custom easing
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animations
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = "",
  ...props
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  animation = "fadeInUp",
  className = "",
  ...props
}) => {
  const variant = animationVariants[animation] || animationVariants.fadeInUp;

  return (
    <motion.div
      className={className}
      variants={variant}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  yOffset = 50,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: yOffset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Counter animation
export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  ...props
}) => {
  return (
    <motion.span
      className={className}
      initial={{ textContent: from }}
      whileInView={{ textContent: to }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeOut" }}
      onUpdate={(latest: any) => {
        if (latest.textContent !== undefined) {
          const current = Math.round(latest.textContent);
          return `${prefix}${current}${suffix}`;
        }
      }}
      {...props}
    >
      {prefix}
      {from}
      {suffix}
    </motion.span>
  );
};

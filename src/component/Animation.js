export const slideIn = {
  hidden: { x: -100 },
  show: {
    x: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
  },
};
export const ImgAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

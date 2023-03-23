import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
}

const ProfilePic = ({children}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
        controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="shadow-xl relative       z-10 bg-gradient-to-t from-red to-orange rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden md:h-96 md:w-96 pl-15"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={imageVariants}
    >{children}</motion.div>
  );
}

export default ProfilePic
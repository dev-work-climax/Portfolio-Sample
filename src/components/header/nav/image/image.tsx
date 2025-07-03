import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity } from "../../anim";
import { cn } from "@/lib/utils";

interface IndexProps {
  src: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={src}
        width={200}
        height={200}
        className="my-32 w-full object-cover"
        alt={"Image"}
        // priority={true}
      />
    </motion.div>
  );
};

export default Index;

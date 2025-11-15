import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface ImageSliderProps {
  images: string[];
  alt?: string;
  durationMs?: number;
  clickToNext?: boolean; // default true
  onSlideChange?: (index: number) => void; // callback lên cha
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
  
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  alt = "slide",
  durationMs = 400,
  clickToNext = true,
  onSlideChange,
}) => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  // Báo index initial lên cha
  useEffect(() => {
    onSlideChange?.(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      setIndex(([curr]) => {
        const next = (curr + newDirection + images.length) % images.length;
        onSlideChange?.(next);
        return [next, newDirection];
      });
    },
    [images.length, onSlideChange]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    delta: 40,
    trackMouse: true,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!clickToNext) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const half = rect.width / 2;
    if (clickX > half) {
      paginate(1); // click phải → kế tiếp
    } else {
      paginate(-1); // click trái → lùi lại
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      {...handlers}
      className="relative w-full h-full overflow-hidden cursor-pointer touch-pan-y select-none"
      onClick={handleClick}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image slider"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: durationMs / 1000 },
            opacity: { duration: 0.15 },
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ willChange: "transform, opacity" }}
        >
          <img
            src={images[index]}
            alt={`${alt} - ${index + 1}`}
            className="max-w-full max-h-full object-contain select-none pointer-events-none"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface MediaItem {
  type: "image" | "video" | "gif";
  src: string;
}

interface VideoImgProps {
  media: MediaItem[];
  alt?: string;
  durationMs?: number;
  clickToNext?: boolean;
  onSlideChange?: (index: number) => void;
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

const VideoImg: React.FC<VideoImgProps> = ({
  media,
  alt = "media",
  durationMs = 500,
  clickToNext = true,
  onSlideChange,
}) => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  // Load orientation mỗi khi slide đổi
  useEffect(() => {
    if (media[index].type !== "image") {
      setIsPortrait(null);
      return;
    }

    const img = new Image();
    img.src = media[index].src;
    img.onload = () => {
      setIsPortrait(img.naturalHeight > img.naturalWidth);
    };
  }, [index, media]);

  useEffect(() => {
    onSlideChange?.(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginate = useCallback(
    (dir: number) => {
      setIndex(([curr]) => {
        const next = (curr + dir + media.length) % media.length;
        onSlideChange?.(next);
        return [next, dir];
      });
    },
    [media.length, onSlideChange]
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
    clickX > rect.width / 2 ? paginate(1) : paginate(-1);
  };

  if (!media || media.length === 0) return null;

  const current = media[index];

  // 🧠 Auto fit mode
  const imageFitClass =
  isPortrait === null
    ? "object-contain"
    : isPortrait
    ? "object-cover"   // ảnh dọc
    : "object-cover"; 

  return (
    <div
      {...handlers}
      className="relative w-full h-full overflow-hidden cursor-pointer touch-pan-y select-none"
      onClick={handleClick}
      role="region"
      aria-roledescription="carousel"
      aria-label="Media slider"
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
          {/* Ảnh */}
          {current.type === "image" && (
            <img
              src={current.src}
              alt={`${alt} - ${index + 1}`}
              className={`w-full h-full ${imageFitClass} bg-primary select-none pointer-events-none`}
              draggable={false}
            />
          )}

          {/* {current.type === "gif" && (
            // <img
            //   src={current.src}
            //   alt={`${alt} - ${index + 1}`}
            //   className={`w-full h-full ${imageFitClass} bg-primary select-none pointer-events-none`}
            //   draggable={false}
            // />
            
          )} */}

          {/* Video */}
          {current.type === "video" && (
            <video
              src={current.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VideoImg;

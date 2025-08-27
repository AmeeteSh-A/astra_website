import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { removeBackground, loadImageFromSrc } from "../utils/backgroundRemoval";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  animate?: {
    y?: number[];
    duration?: number;
  };
  imageClassName?: string;
}

const FloatingImage = ({ src, alt, className, animate, imageClassName }: FloatingImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(src);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImageFromSrc(src);
        const processedBlob = await removeBackground(img);
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error('Failed to remove background:', error);
        // Fallback to original image
        setProcessedImageUrl(src);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup
    return () => {
      if (processedImageUrl !== src) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src]);

  return (
    <motion.div
      className={className}
      animate={animate ? { y: animate.y } : undefined}
      transition={animate ? { 
        duration: animate.duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      } : undefined}
    >
      <img
        src={processedImageUrl}
        alt={alt}
        className={`${imageClassName} ${isProcessing ? 'opacity-50' : ''} transition-opacity duration-300`}
      />
    </motion.div>
  );
};

export default FloatingImage;
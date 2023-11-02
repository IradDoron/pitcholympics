"use client";
import { useEffect, useState } from "react";

type ColorVariants = {
  peachLight: string;
  peachDark: string;
  lambadaLight: string;
  lambadaDark: string;
  PurpleHarmonyLight: string;
  PurpleHarmonyDark: string;
  violateSkyLight: string;
  violateSkyDark: string;
  radial1: string;
};

const colorVariants: ColorVariants = {
  peachLight: "bg-peach-light",
  peachDark: "bg-peach-dark",
  lambadaLight: "bg-lambada-light",
  lambadaDark: "bg-lambada-dark",
  PurpleHarmonyLight: "bg-PurpleHarmony-light",
  PurpleHarmonyDark: "bg-PurpleHarmony-dark",
  violateSkyLight: "bg-violateSky-light",
  violateSkyDark: "bg-violateSky-dark",
  radial1: "bg-circle-wave",
};

interface CircleGradientProps {
  color: keyof ColorVariants;
}

const CircleGradient: React.FC<CircleGradientProps> = ({ color }) => {
  const [isClicked, setIsClicked] = useState(false);

  const setIsClickedHandler = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 700);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isClicked]);

  return (
    <div className="relative z-10 group" onClick={setIsClickedHandler}>
      <div
        className={`absolute z-10 group-hover:animate-scaleUp w-24 h-24 rounded-full ${colorVariants[color]}`}
      />

      <div className={`absolute ${isClicked ? "animate-fadeOut" : ""}`}>
        <div
          className={`absolute ${
            isClicked ? "animate-scaleUpWave" : "animate"
          } w-24 h-24 rounded-full ${colorVariants[color]}`}
        />
      </div>
    </div>
  );
};

export default CircleGradient;

import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const Anipath = ({
  inView,
  d,
  stroke,
  strokeWidth,
  delay,
  friction,
  ...props
}) => {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: inView ? 0 : length,
    config: {
      friction: friction || 36,
    },
    delay: delay || 250,
  });

  return (
    <animated.path
      style={animatedStyle}
      ref={(ref) => {
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }}
      stroke={stroke}
      strokeWidth={strokeWidth}
      d={d}
      {...props}
    />
  );
};

export default Anipath;

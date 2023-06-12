import React from "react";
import { animated, useSpring } from "@react-spring/web";

const Ani_appear_comp = ({
  children,
  className,
  element,
  inView,
  delay,
  friction,
  ...props
}) => {
  const Element = animated(element);
  const aniStyle = useSpring({
    opacity: inView ? 1 : 0,
    translateY: inView ? 0 : 20,
    config: {
      friction: friction || 32,
    },
    delay,
  });

  return (
    <Element style={aniStyle} className={className} {...props}>
      {children}
    </Element>
  );
};

export default Ani_appear_comp;

import React from "react";
import { animated, useSpring } from "@react-spring/web";

const Ani_line_style = ({ element, children, inView, delay, className }) => {
  const Element = animated(element);
  const aniLineStyle = useSpring({
    scaleX: inView ? 1 : 0,
    opacity: inView ? 1 : 0,
    delay: delay || 250,
    config: {
      friction: 36,
    },
  });

  return (
    <Element style={aniLineStyle} className={className}>
      {children}
    </Element>
  );
};

export default Ani_line_style;

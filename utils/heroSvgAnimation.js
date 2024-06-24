// utils/initAnimation.js

const initAnimation = () => {
  const animateDots = (svgElement, dot1Id, dot2Id) => {
    const svg = Snap(svgElement);
    if (!svg) return;

    const circleRadius = 11;

    const circle1 = svg.circle(0, 0, circleRadius).attr({
      id: "circle1",
      class: "dot",
      fill: `url(#${dot1Id})`,
    });

    const circle2 = svg.circle(0, 0, circleRadius).attr({
      id: "circle2",
      class: "dot",
      fill: `url(#${dot2Id})`,
    });

    const path = svg.select("path");
    const pathLength = path.getTotalLength();
    const offsetLength = pathLength * 0.7;
    let isAnimating = false;

    const animateDot1 = (forward) => {
      const start = forward ? 0 : pathLength;
      const end = forward ? pathLength : 0;

      Snap.animate(
        start,
        end,
        (val) => {
          const point = path.getPointAtLength(val);
          circle1.attr({ cx: point.x, cy: point.y });
        },
        15000,
        () => {
          if (!isAnimating) {
            circle1.transform("t0,0");
            animateDot1(!forward);
          }
        }
      );
    };

    const animateDot2 = (forward) => {
      const start = forward ? pathLength : 0;
      const end = forward ? 0 : pathLength;

      Snap.animate(
        start,
        end,
        (val) => {
          const point = path.getPointAtLength(pathLength - val);
          circle2.attr({ cx: point.x, cy: point.y });
        },
        15000,
        () => {
          if (!isAnimating) {
            circle2.transform("t0,0");
            animateDot2(!forward);
          }
        }
      );
    };

    animateDot1(true);
    animateDot2(false);
  };

  return {
    animateDots,
  };
};

export default initAnimation;

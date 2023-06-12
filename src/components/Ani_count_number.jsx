import { useSprings } from "@react-spring/web";

export function countNumber(arr, inView) {
  const countNumArr = arr;

  const countSprings = useSprings(
    countNumArr && countNumArr.length,
    countNumArr &&
      countNumArr.map((item) => ({
        from: { count: item.startNum },
        to: { count: item.finalNum },
        reset: inView ? true : false,
        config: {
          friction: 50,
        },
      }))
  );

  const countNumbers = countSprings.map((item) =>
    item.count.to((val) => Math.floor(val))
  );

  return countNumbers;
}

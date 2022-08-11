import { useState } from "react";
import { MAX, MIN } from "utils/constants";

export enum CounterEnum {
  INCREMENT = 'increment',
  DECREMENT = 'decrement'
}

export const useCount = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = (type: CounterEnum) => {
    switch (type) {
      case CounterEnum.INCREMENT:
        count < MAX && setCount(count + 1);
        break;
      case CounterEnum.DECREMENT:
        count > MIN && setCount(count - 1);
        break;
      default:
        break;
    }
  }

  return { count, handleCount };
}
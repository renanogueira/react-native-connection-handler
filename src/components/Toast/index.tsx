import React, { ReactElement, useState, useEffect } from 'react';
import { Animated } from 'react-native';
import Color from 'color';

import type { ToastContext } from 'src/types';
import { AnimatedView, Text } from './styles';

const { Value, spring } = Animated;

export default function Toast({ data }: ToastContext): ReactElement {
  const height = 151;
  const [transY] = useState<Animated.Value>(new Value(-200));

  useEffect(() => {
    if (data.visible) {
      spring(transY, {
        toValue: -35,
        friction: 11,
        tension: 75,
        useNativeDriver: true,
      }).start();
    } else {
      spring(transY, {
        toValue: -height - 30,
        friction: 11,
        tension: 75,
        useNativeDriver: true,
      }).start();
    }
  }, [data.visible]);

  return (
    <AnimatedView style={{
      opacity: transY.interpolate({
        inputRange: [height - 10, height],
        outputRange: [1, 0],
      }),
      transform: [{ translateY: transY }],
      backgroundColor: data.color,
      height: height / 2,
      borderColor: Color(data.color).darken(0.15).toString(),
      borderWidth: 0.3,
    }}
    >
      <Text numberOfLines={3}>{data.message}</Text>
    </AnimatedView>
  );
}

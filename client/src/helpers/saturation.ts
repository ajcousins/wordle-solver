export const saturation = (freq: number): number => {
  switch (true) {
    case freq > 0.00001:
      return 50;
    case freq > 0.000001:
      return 75;
    case freq > 0.0000001:
      return 90;
    case freq > 0.00000001:
      return 99;
    default:
      return 100;
  }
};

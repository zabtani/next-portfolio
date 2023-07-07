export enum Animation {
  left = 'LEFT',
  right = 'RIGHT',
  cross = 'CROSS',
}

export const getSlideAnimation = (index = 1, animation = Animation.left) => {
  switch (animation) {
    case Animation.right:
      return `animate-slide-in-right delay-${(index + 1) * 100}`;
    case Animation.cross:
      return `animate-slide-in-${index % 2 === 0 ? 'right' : 'left'} delay-300 `;
    default:
      return `animate-slide-in-left delay-${(index + 1) * 100}`;
  }
};

import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
  100% {
    opacity: 1;
  }
`;

export const fadeUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideDown = keyframes`
0% {
  opacity: 0;
  transform: translateY(-100%);
}
50% {
  opacity: 1;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const slideUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
}
50% {
  opacity: 1;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

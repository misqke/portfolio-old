const theme = {
  sizes: {
    xs: `.75rem`,
    sm: `1rem`,
    md: `1.5rem`,
    lg: `2rem`,
  },
};

const hue = 199;

export const lightTheme = {
  body: `hsl(${hue}, 100%, 98%)`,
  text: `hsl(${hue}, 80%, 10%)`,
  primary: `hsl(${hue}, 100%, 25%)`,
  bg: `hsl(${hue}, 50%, 80%)`,
  bgTrans: `hsla(${hue}, 50%, 80%, .6)`,
  ...theme,
};

export const darkTheme = {
  body: `hsl(${hue}, 100%, 2%)`,
  text: `hsl(${hue}, 100%, 95%)`,
  primary: `hsl(${hue}, 80%, 60%)`,
  bg: `hsl(${hue}, 60%, 12%)`,
  bgTrans: `hsla(${hue}, 60%, 12%, .6)`,
  ...theme,
};

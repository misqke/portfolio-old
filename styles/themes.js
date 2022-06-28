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
  body: `hsl(${hue}, 100%, 95%)`,
  text: `hsl(${hue}, 100%, 10%)`,
  primary: `hsl(${hue}, 100%, 30%)`,
  bg: `hsl(${hue}, 50%, 80%)`,
  bgTrans: `hsla(${hue}, 50%, 80%, .7)`,
  ...theme,
};

export const darkTheme = {
  body: `hsl(${hue}, 100%, 0%)`,
  text: `hsl(${hue}, 100%, 95%)`,
  primary: `hsl(${hue}, 80%, 60%)`,
  bg: `hsl(${hue}, 60%, 12%)`,
  bgTrans: `hsla(${hue}, 60%, 12%, .7)`,
  ...theme,
};

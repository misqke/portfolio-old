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
  text: `hsl(${hue}, 100%, 3%)`,
  primary: `hsl(${hue}, 100%, 6%)`,
  bg: `hsl(${hue}, 100%, 60%)`,
  ...theme,
};

export const darkTheme = {
  body: `hsl(${hue}, 100%, 3%)`,
  text: `hsl(${hue}, 100%, 95%)`,
  primary: `hsl(${hue}, 100%, 60%)`,
  bg: `hsl(${hue}, 90%, 6%)`,
  ...theme,
};

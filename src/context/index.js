import React from 'react';

const Themes = {
    color: {
        black: '#000',
        dark: '#050606',
        white: '#fff',
        secondary: '#aaabab',
        dim_gray: '#5c5e62',
        light: '#c4c4c4',
        primary: '#1EDA47',
    },
};
const ThemeContext = React.createContext(Themes);

export { Themes, ThemeContext };

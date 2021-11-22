import React from 'react';

const Themes = {
    color: {
        black: '#000',
        raven: '#050606',
        white: '#fff',
        gray: '#aaabab',
        light_gray: '#c4c4c4',
        charcoal: '#5c5e62',
        green: '#1EDA47',
    },
};
const ThemeContext = React.createContext(Themes);

export { Themes, ThemeContext };

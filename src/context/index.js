import React from 'react';

const Themes = {
    color: {
        black: '#050606',
        gray: '#5c5e62',
        white: '#c4c4c4',
        lite_white: '#aaabab',
        submit_btn: '#1EDA47',
    },
};
const ThemeContext = React.createContext(Themes);

export { Themes, ThemeContext };

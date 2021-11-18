import React from 'react';

const Themes = {
    color: {
        black: '#050606',
        gray: '#5c5e62',
        white: '#c4c4c4',
        lite_white: '#aaabab',
        btn_color: '#1EDA47',
    },
    small_btn: {
        padding: '11px 34px',
        fontSize: '15px',
        lineHeight: '18px',
    },
    norm_btn: {
        padding: '15px 50px',
        fontSize: '17px',
        lineHeight: '21px',
    },
    large_btn: {
        padding: '14px 235px',
        fontSize: '20px',
        lineHeight: '24px',
    },
    big_btn: {
        padding: '23px 156px',
        fontSize: '38px',
        lineHeight: '46px',
    },
    small_text: {
        fontSize: '20px',
        lineHeight: '24px',
    },
};
const ThemeContext = React.createContext(Themes);

export { Themes, ThemeContext };

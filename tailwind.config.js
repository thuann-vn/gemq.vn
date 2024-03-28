import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import animated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
            colors: {
                'main': {
                    '50': '#FCF5EF',
                    '100': '#feffc1',
                    '200': '#fffd86',
                    '300': '#fff441',
                    '400': '#ffe60d',
                    '500': '#ffd700',
                    '600': '#d19e00',
                    '700': '#a67102',
                    '800': '#89580a',
                    '900': '#74480f',
                    '950': '#442604',
                },
                'secondary': {
                    '50': '#fefce8',
                    '100': '#fffac2',
                    '200': '#fff288',
                    '300': '#ffe344',
                    '400': '#fecf10',
                    '500': '#eeb604',
                    '600': '#cd8c01',
                    '700': '#a46304',
                    '800': '#874d0c',
                    '900': '#733f10',
                    '950': '#432005',
                }
            }
        },
    },

    plugins: [forms, aspectRatio, animated],
};

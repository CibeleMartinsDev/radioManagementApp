import { extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
        // Add new color
        primary: {
            generic: '#FFFFFF',
            genericBlack: '#000000',
            transparent: '#00000000',
            300: '',
            400: '',
            500: '',
            600: '',
            700: '',
            800: '',
            900: '',
        },
        // Redefining only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },
    },
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
    },
})

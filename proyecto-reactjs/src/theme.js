import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primaryPallete = {
    main: '#0feef2'
}

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#6dffff',
        main: '#02ddfb',
        dark: '#00abc8',
        contrastText: '#000000',
      },
      secondary: {
        light: '#31425c',
        main: '#061c32',
        dark: '#00000c',
        contrastText: '#ffffff',
      },
    },
  });

export default theme;
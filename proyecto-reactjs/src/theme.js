import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const primaryPallete = {
    main: '#0feef2'
}

const theme = createMuiTheme({
    palette: {
        primary: primaryPallete,
    }
})

export default theme;
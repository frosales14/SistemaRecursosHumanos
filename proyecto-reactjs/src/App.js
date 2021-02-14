import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './components/routes/appRoutes';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    )
}

export default App;
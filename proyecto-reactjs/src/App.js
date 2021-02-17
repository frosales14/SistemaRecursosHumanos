import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './components/routes/appRoutes';
import Navbar from './components/Navbar'
import Botones from './components/Botones'
import Footer from './components/Footer'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
            <Navbar></Navbar>
                <Botones></Botones>
                <Botones></Botones>
                <Botones></Botones>
                <Botones></Botones>
            <Footer>
            </Footer>
        </ThemeProvider>
    )
}

export default App;
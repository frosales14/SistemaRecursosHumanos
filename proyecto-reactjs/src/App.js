import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './components/routes/appRoutes';
import Navbar from './components/components/Navbar'
import Botones from './components/components/Botones'
import Footer from './components/components/Footer'

const App = () => {
    return (
        <AppRoutes />
    )
}

export default App;
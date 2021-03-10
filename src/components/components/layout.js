import React from 'react';

import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Wrapper } from './common/layout';
import Navbar from './Navbar';
import Footer from './Footer';
import { GlobalStyles } from './globalStyles';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            <Wrapper style={{ marginBottom: '80px' }}>
                <main>{children}</main>
            </Wrapper>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;

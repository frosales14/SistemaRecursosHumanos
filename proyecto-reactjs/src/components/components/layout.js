import React from 'react';

import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Wrapper } from './common/layout';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Wrapper>
                <main>{children}</main>
            </Wrapper>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;

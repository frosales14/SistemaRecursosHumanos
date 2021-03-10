import { createGlobalStyle } from 'styled-components';
import {
    monserratBlack,
    monserratBlackItalic,
    monserratBold,
    monserratBoldItalic,
    monserratExtraBold,
    monserratExtraBoldItalic,
    monserratExtraLight,
    monserratExtraLightItalic,
    monserratItalic,
    monserratLight,
    monserratLightItalic,
    monserratMedium,
    monserratMediumItalic,
    monserratRegular,
    monserratSemiBold,
    monserratSemiBoldItalic,
    monserratThin,
    monserratThinItalic,
} from '../../fonts';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Monserrat Black';
        src: url(${monserratBlack}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Black Italic';
        src: url(${monserratBlackItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Bold';
        src: url(${monserratBold}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Bold Italic';
        src: url(${monserratBoldItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Extra Bold';
        src: url(${monserratExtraBold}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Extra Bold Italic';
        src: url(${monserratExtraBoldItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Extra Light';
        src: url(${monserratExtraLight}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Extra Light Italic';
        src: url(${monserratExtraLightItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Italic';
        src: url(${monserratItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Light Italic';
        src: url(${monserratLightItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Medium';
        src: url(${monserratMedium}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Medium Italic';
        src: url(${monserratMediumItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Regular';
        src: url(${monserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }    

    @font-face {
        font-family: 'Monserrat Light';
        src: url(${monserratLight}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Semi Bold';
        src: url(${monserratSemiBold}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Semi Bold Italic';
        src: url(${monserratSemiBoldItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Thin';
        src: url(${monserratThin}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Monserrat Thin Italic';
        src: url(${monserratThinItalic}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    

`;

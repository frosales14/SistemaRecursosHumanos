import styled from 'styled-components';
import { mobileScreen, normalMonitor, bigMonitorScreen } from './sizes';

export const Section = styled.section`
    margin: 0 0 95px 0;
    @media only screen and (min-width: ${bigMonitorScreen}) {
        margin-bottom: 250px;
    }
`;

export const Wrapper = styled.div`
    @media only screen and (max-width: ${mobileScreen}) {
        padding: 135px 0 0 0;
    }
    @media only screen and (min-width: ${mobileScreen}) and (max-width: ${normalMonitor}) {
        padding: 190px 0 0 0;
    }
    @media only screen and (min-width: ${normalMonitor}) {
        padding: 270px 0 0 0;
    }
`;

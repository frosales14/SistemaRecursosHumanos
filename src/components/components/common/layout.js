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
        padding: 10px 0 0 0;
    }
    @media only screen and (min-width: ${mobileScreen}) and (max-width: ${normalMonitor}) {
        padding: 20px 0 0 0;
    }
    @media only screen and (min-width: ${normalMonitor}) {
        padding: 100px 0 0 0;
    }
`;

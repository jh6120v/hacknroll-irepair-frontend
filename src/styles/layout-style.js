import styled from 'styled-components';
import { respondTo } from './_mixin';
import logo from '../assets/images/i-repair-logo.svg';

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 34vh;
  padding: 11vh 0 5vh 0;
`;

const Logo = styled.div`
  width: 100%;
  background-image: url(${logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  min-height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
  ${respondTo.xs`
    margin: 0 auto;
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

const ContainerInner = styled.div`
  width: 100%;
  position: relative;
  background: #ff6f89;
  background: -moz-linear-gradient(-45deg,  #ff6f89 0%, #ff9478 100%);
  background: -webkit-linear-gradient(-45deg,  #ff6f89 0%,#ff9478 100%);
  background: linear-gradient(135deg,  #ff6f89 0%,#ff9478 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6f89', endColorstr='#ff9478',GradientType=1 );
`;

export {
    Header,
    Logo,
    Wrapper,
    Container,
    ContainerInner
};

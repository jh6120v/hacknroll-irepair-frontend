import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  height: calc(44px + env(safe-area-inset-top));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: env(safe-area-inset-top) 10px 0 10px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 22px;
`;

const PrevLink = styled.div`
  min-width: 28px;
  height: 28px;
`;

const NextLink = styled(PrevLink)``;

export {
    Nav,
    Title,
    PrevLink,
    NextLink,
};

import styled, { css } from 'styled-components';
import icon1 from '../../../assets/images/btn-icon-1.svg';
import icon2 from '../../../assets/images/btn-icon-2.svg';
import icon3 from '../../../assets/images/btn-icon-3.svg';

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 66vh;
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff;
  box-shadow: 0 5px 18px 0 rgba(200,75,98,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 1;
  ${(props) => (props.absolute ? css`
    position: absolute;
    left: 0;
    bottom: 0;
  ` : null)}
`;

const PanelTitle = styled.div`
  width: 100%;
  font-size: 23px;
  color: #f1828d;
  padding: 68px 0 35px 0;
  text-align: center;
`;

const PanelButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

const PanelButton = styled.div`
  width: 67%;
  border-radius: 10px;
  font-size: 19px;
  letter-spacing: .68px;
  padding: 22px 0;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  font-weight: 500;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#f1828d')};
  ${(props) => {
        if (props.icon) {
            let icon;
            switch (props.icon) {
                case 'icon-1':
                    icon = icon1;
                    break;
                case 'icon-2':
                    icon = icon2;
                    break;
                case 'icon-3':
                default:
                    icon = icon3;
            }

            return css`
              background-repeat: no-repeat;
              background-size: 28px 28px;
              background-position: 34px center;
              background-image: url(${icon});
            `;
        }
    }}
`;

const TabBarWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 83px;
  background-color: #fff;
  border-top: .5px solid rgba(4, 4, 15, .4);
`;

const TabBarItem = styled.div`
  flex: 1 1 auto;
  height: 100%;
`;

const TabBarIcon = styled.div`
  width: 100%;
  height: 32px;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${((props) => props.icon)});
  margin: 4px 0 2px 0;
`;

const TabBarText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => (props.isSelected ? '#f1828d' : '#828282')};
`;

export {
    Panel,
    PanelTitle,
    PanelButtonWrap,
    PanelButton,
    TabBarWrap,
    TabBarItem,
    TabBarIcon,
    TabBarText
};

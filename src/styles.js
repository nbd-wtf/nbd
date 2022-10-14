import styled from 'styled-components';
import { css } from 'styled-components';

const screenSize = {
  desktop: 1140,
  tablet: 768,
};

const media: { [string]: Function } = Object.keys(screenSize).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSize[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});


export const Wrapper = styled.div``;

export const Content = styled.div`
    padding: 0 20px;
    ${media.desktop`
        padding: 0;
    `};
`;
export const ContentInnerWrapper = styled.div`
    margin: 0 auto;
    max-width: 100%;
    ${media.desktop`
        max-width: 950px;
    `};
`;
export const ContentVideoWrapper = styled.div`
    margin: 0 auto;
    max-width: 100%;
    margin: 60px auto 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${media.desktop`
        max-width: 950px;
    `};
`;
export const ContentVideoItem = styled.img`
    width: 540px;
    max-width: 100%;
`;
export const ContentDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 100%;
    width: 600px;
    margin: 0 auto;
`;
export const ContentDescriptionItemTitle = styled.div`
    font-weight: 800;
    font-size: 26px;
`;
export const ContentDescriptionItemDivider = styled.div`
    height: 1px;
    width: 300px;
    background: #fff;
    margin: 25px 0;
`;
export const ContentDescriptionItemText = styled.div`
    font-size: 14px;
`;
export const ContentGridWrapper = styled.div`
    margin: 60px 0 140px 0;
`;
export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 0;

    ${media.tablet`
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    `};

    ${media.desktop`
        grid-template-columns: repeat(3, 1fr);
    `};
`;
export const ContentGridItem = styled.div`
    background: #fff;
    color: #000;
    border-radius: 8px;
    border: 1px solid #fff;
    padding: 14px 18px;
`;
export const ContentGridItemOuterWrapper = styled.div`
    padding: 26px;
    border: 1px solid #444;
    border-radius: 12px;
`;
export const ContentGridItemTitle = styled.div`
    font-size: 26px;
    font-weight: 800;
    padding-bottom: 10px;
`;
export const ContentGridItemDescription = styled.div``;

export const Header = styled.div`
    padding: 0 20px;
    ${media.desktop`
        padding: 0;
    `};
`;
export const HeaderInnerWrapper = styled.div`
    padding: 12px 25px;
    border: 1px solid #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;

    ${media.desktop`
        padding: 12px 65px;
        max-width: 950px;
        margin: 40px auto 20px auto;
    `};
`;
export const HeaderLogo = styled.img`
    width: 95px;
`;
export const HeaderLogoWrapper = styled.div`
    margin: 0 auto;
    ${media.tablet`
        margin: 0;
    `};
`;
export const HeaderCenter = styled.div``;
export const HeaderMenu = styled.div`
    display: none;
    ${media.tablet`
        display: flex;
        flex-direction: row;
    `};
`;
export const HeaderMenuItemSecondary = styled.div`
    border-radius: 50px;
    margin-left: 10px;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
`;
export const HeaderMenuItemPrimary = styled.div`
    border-radius: 50px;
    margin-left: 10px;
    background: #fff;
    color: #000;
    padding: 8px 16px;
    cursor: pointer;
`;

export const Footer = styled.div`
    padding: 0 20px;
    ${media.desktop`
        padding: 0;
    `};
`;
export const FooterInnerWrapper = styled.div`
    margin: 0 auto;
    max-width: 100%;
    margin: 0 auto 60px auto;
    border-top: 1px solid #fff;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px; 
    ${media.tablet`
        flex-direction: row;
    `};

    ${media.desktop`
        max-width: 950px;
    `};
`;
export const FooterCopyright = styled.div`
    font-size: 14px;
`;
export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
export const FooterSocialItem = styled.div`
    margin: 0 8px;
`;
export const FooterSocialItemTwitter = styled.img`
    cursor: pointer;
    opacity: 1;
    width: 25px;

    &:hover {
        opacity: 0.7;
    }
`;
export const FooterSocialItemTelegram = styled.img`
    width: 30px;
    margin-top: -5px;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }
`;
export const FooterLogo = styled.img`
    width: 120px;
`;

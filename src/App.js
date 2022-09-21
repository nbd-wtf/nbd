import { MENU, PROJECTS, SOCIAL } from './constants';
import {
  Wrapper,
  Content,
  ContentInnerWrapper,
  ContentVideoWrapper,
  ContentVideoItem,
  ContentDescriptionWrapper,
  ContentDescriptionItemTitle,
  ContentDescriptionItemDivider,
  ContentDescriptionItemText,
  ContentGridWrapper,
  ContentGridItemDescription,
  ContentGridItemTitle,
  ContentGrid,
  ContentGridItem,
  ContentGridItemOuterWrapper,
  Header,
  HeaderInnerWrapper,
  HeaderLogo,
  HeaderLogoWrapper,
  HeaderCenter,
  HeaderMenu,
  HeaderMenuItemPrimary,
  HeaderMenuItemSecondary,
  Footer,
  FooterInnerWrapper,
  FooterCopyright,
  FooterSocialWrapper,
  FooterSocialItem,
  FooterSocialItemTwitter,
  FooterSocialItemTelegram,
  FooterLogo,
} from './styles';
import logo from './images/logo.png';
import nbd from './images/nbd.png';
import telegramLogo from './images/telegram.png';
import twitterLogo from './images/twitter.png';

function App() {
  return (
    <Wrapper>
      <Header>
        <HeaderInnerWrapper>
          <HeaderLogoWrapper>
            <HeaderLogo src={logo} />
          </HeaderLogoWrapper>
          <HeaderCenter>
            Visit ZEBEDEE
          </HeaderCenter>
          <HeaderMenu>
            {MENU.map((item) => (
              <>
                {item.type === 'primary' && (
                  <HeaderMenuItemPrimary>
                    {item.label}
                  </HeaderMenuItemPrimary>
                )}
                {item.type === 'secondary' && (
                  <HeaderMenuItemSecondary>
                    {item.label}
                  </HeaderMenuItemSecondary>
                )}
              </>
            ))}
          </HeaderMenu>
        </HeaderInnerWrapper>
      </Header>
      <Content>
        <ContentInnerWrapper>
          <ContentVideoWrapper>
            <ContentVideoItem src={nbd} />
          </ContentVideoWrapper>
          <ContentDescriptionWrapper>
            <ContentDescriptionItemTitle>
              An open-source initiative from ZEBEDEE
            </ContentDescriptionItemTitle>
            <ContentDescriptionItemDivider />
            <ContentDescriptionItemText>
              Fugiat aute consequat anim nulla culpa nostrud labore pariatur tempor excepteur ut anim adipisicing aute. Commodo duis eiusmod labore officia tempor. Dolore excepteur fugiat ex non deserunt.
            </ContentDescriptionItemText>
          </ContentDescriptionWrapper>
          <ContentGridWrapper>
            <ContentGrid>
              {PROJECTS.map((item) => (
                <ContentGridItemOuterWrapper>
                  <ContentGridItem>
                    <ContentGridItemTitle>{item.name}</ContentGridItemTitle>
                    <ContentGridItemDescription>{item.description}</ContentGridItemDescription>
                  </ContentGridItem>
                </ContentGridItemOuterWrapper>
              ))}
            </ContentGrid>
          </ContentGridWrapper>
        </ContentInnerWrapper>
      </Content>
      <Footer>
        <FooterInnerWrapper>
          <FooterCopyright>
            © 2022 NO BIG DEAL
          </FooterCopyright>
          <FooterSocialWrapper>
            {SOCIAL.map(item => (
              <FooterSocialItem>
                {item.type === 'twitter' && (
                  <FooterSocialItemTwitter src={twitterLogo} />
                )}
                {item.type === 'telegram' && (
                  <FooterSocialItemTelegram src={telegramLogo} />
                )}
              </FooterSocialItem>
            ))}
          </FooterSocialWrapper>
          <FooterLogo src={logo} />
        </FooterInnerWrapper>
      </Footer>
    </Wrapper>
  );
}

export default App;

import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.p`
  color: #fff;
  font-weight: 900;
  font-size: 3rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  color: #ccc;
  padding-top: 10px;
`;

const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const GitHub = styled.img`
  width: 20px;
  margin-left: 5px;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Twitter = styled.img`
  width: 35px;
  opacity: 0.8;
  margin-left: -15px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const GITHUB_URL = "https://github.com/nbd-wtf";
const TWITTER_URL = "https://twitter.com/nbd_wtf";

const openURL = (url) => window.open(url, '_blank');

function App() {
  return (
    <Container>
      <Logo>nbd</Logo>
      <Description>open source bitcoin & lightning development</Description>
      <Socials>
        <Twitter src='/images/twitter.svg' onClick={() => openURL(TWITTER_URL)} />
        <GitHub src='/images/github.svg' onClick={() => openURL(GITHUB_URL)} />
      </Socials>
    </Container>
  );
}

export default App;

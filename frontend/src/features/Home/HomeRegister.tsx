import Link from "next/link";
import { Description, Title } from "../../components/Shared/sharedstyles";
import { HomeRegisterContainer, HomeRegisterTextContainer, LinkContainer, LinkWrapper, StyledA } from "./HomeStyles";


const HomeRegister: React.FC = () => {
  const StyledLink = ({ href, name }) => (
    <Link href={href} passHref legacyBehavior>
      <StyledA>{name}</StyledA>
    </Link>
  )
  return (
    <HomeRegisterContainer data-aos="fade">
      <HomeRegisterTextContainer>
        <div style={{ display: "flex" }}>
          <Title>
            Article
          </Title>
          <Title style={{ color: "#37f725", paddingLeft: "13px" }}>
            Square
          </Title>
        </div>

        <Description>
          Busque artigos e notícias públicados por mais de 80.000 fontes de notícias e blogs nos ultimos 5 anos!
        </Description>
      </HomeRegisterTextContainer>
      <div style={{ marginLeft: "24px" }}>
        <LinkContainer>
          <LinkWrapper>
            <StyledLink href="/" name="Registre-se agora! &rarr;" />
          </LinkWrapper>
        </LinkContainer>
      </div>
    </HomeRegisterContainer>
  );
}

export default HomeRegister;
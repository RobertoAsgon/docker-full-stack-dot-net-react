import styled from "styled-components";

const HomeContainerBg = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const HomeRegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HomeRegisterTextContainer = styled.div`
    max-width: 600px;
    margin-top: 60px;
`

const HomeCardsContainer = styled.div`
    margin-top: 24px;
    max-width: 1366px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const HomeSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .inputSearch {
        width: 400px;
    }
`

const PaginationWrapper = styled.div`
    margin: 32px 0 64px 0;
    .MuiPaginationItem-root.Mui-selected {
        background-color: #11f73b;
    }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

const LinkWrapper = styled.div`
  padding: 1.5rem;
  color: #37f725;
  text-decoration: none;
  border: 2px solid #37f725;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: ##25f753;
    border-color: ##25f753;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

export { 
    HomeRegisterContainer, 
    HomeRegisterTextContainer, 
    HomeCardsContainer, 
    HomeContainerBg, 
    HomeSearchContainer,
    PaginationWrapper,
    LinkContainer,
    LinkWrapper,
    StyledA
}
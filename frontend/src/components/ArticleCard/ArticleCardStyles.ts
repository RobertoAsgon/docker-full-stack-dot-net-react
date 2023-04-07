import styled from "styled-components";

const ArticleCardContainer = styled.div`
    max-width: 345px;
    min-width: 345px;
    max-height: 435px;
    min-height: 435px;
    margin: 24px;
    border-radius: 12px;
    border: 1px solid #11f73b99;

    box-shadow: 7px 10px 27px -3px rgba(0,0,0,0.52);
    -webkit-box-shadow: 7px 10px 27px -3px rgba(0,0,0,0.52);
    -moz-box-shadow: 7px 10px 27px -3px rgba(0,0,0,0.52);
`

const ArticleSkeletonCardContainer = styled.div`
    max-width: 345px;
    min-width: 345px;
    max-height: 435px;
    min-height: 435px;
    margin: 24px;
    border-radius: 12px;

`


export { ArticleCardContainer, ArticleSkeletonCardContainer}
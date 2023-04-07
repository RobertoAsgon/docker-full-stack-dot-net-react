import styled from "styled-components"

const TextWrapper = styled.div`
    display: block; 
    display: -webkit-box;
    font-size: 20dp;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export { TextWrapper }
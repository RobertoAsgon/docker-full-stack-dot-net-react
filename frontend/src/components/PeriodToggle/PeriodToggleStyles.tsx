import { ToggleButton } from "@mui/material";
import styled from "styled-components";

interface PeriodToggleWrapperProps {
  $isSelected: boolean;
}

const PeriodToggleWrapper = styled(ToggleButton)<PeriodToggleWrapperProps>`
  border: solid 2px ${(props) => props.$isSelected ? "#07f533" : "#4f525095"};
  margin-left: 5px;
`
export { 
    PeriodToggleWrapper
}
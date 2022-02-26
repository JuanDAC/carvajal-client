import styled from "styled-components"
import { colors, measurements } from "../../services/utilStyles";

export const AtomInput = styled.input`
    background-color: ${colors.background.primary};
    color: ${colors.foreground.primary};
    line-height:  ${measurements.bounding.middler};
    font-size: ${measurements.text.emphasis};
    padding-block: ${measurements.bounding.micro};
    border-radius: ${measurements.bounding.micro};
    outline: none;
    border: none;
    box-shadow: 0px 0px ${measurements.bounding.micro} 1px ${colors.background.contrast};
    &:focus {
        box-shadow: 0px 0px 0px ${measurements.bounding.micro} ${colors.background.contrast};
    }
`;
import styled from "styled-components"
import { colors, measurements } from "../../services/utilStyles";


export const AtomProduct = styled.article`
    color: ${colors.foreground.primary};
    text-align: center;
    border-radius: ${measurements.bounding.smaller};
    display: flex;
    flex-direction: column;
    filter: opacity(.5) grayscale(.6);
    transition: 150ms ease-in-out;
    &:hover {
        filter: opacity(1);
        box-shadow: 0px 0px 0px ${measurements.bounding.micro} ${colors.background.alternative};
    }
`;


import { colors, measurements } from "../../services/utilStyles";
import styled from "styled-components"


export const AtomLink = styled.span`
    text-align: center;
    display: inline-block;
    color: ${colors.foreground.alternative};
    text-decoration: none;
    font-size: ${measurements.text.emphasis};
    padding-inline: ${measurements.bounding.smaller};
    transition: 150ms ease-in-out;
    &:hover {
        color: ${colors.actions.good};
        font-weight: bold;
        text-shadow: 0 0 ${measurements.bounding.middler} ${colors.actions.failed};
    }
`;
import styled from "styled-components"
import { colors } from "../../services/utilStyles";

export const AtomHeader = styled.header`
    background-color: ${colors.background.alternative};
    box-shadow: 0px -5px 20px ${colors.background.contrast};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 2;
`;

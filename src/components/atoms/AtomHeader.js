import styled from "styled-components"
import { colors } from "../../services/utilStyles";

export const AtomHeader = styled.header`
    background-color: ${colors.background.alternative};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
`;

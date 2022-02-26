import styled from "styled-components"
import { measurements } from "../../services/utilStyles";

export const AtomContainer = styled.section`
    display: grid;
    padding-inline: ${measurements.bounding.smaller};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${measurements.bounding.smaller};
`;
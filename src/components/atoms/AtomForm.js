import styled from "styled-components"
import { colors, measurements } from "../../services/utilStyles";

export const AtomForm = styled.form`
    padding: ${measurements.bounding.bigger};
    background-color: ${colors.background.contrast}33;
    box-shadow: 0px 0px 0px ${measurements.bounding.micro} ${colors.background.contrast};
    border-radius: ${measurements.bounding.micro};
    display: flex;
    gap: ${measurements.bounding.middler};
    flex-direction: column;
    justify-content: center;
`;
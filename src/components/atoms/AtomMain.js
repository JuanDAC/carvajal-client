import styled from "styled-components"
import { colors, measurements } from "../../services/utilStyles";
import {url_background} from "../figures/figures.data"

export const AtomMain = styled.main`
    min-height: calc(100vh - 132px);
    background-color: ${colors.background.primary};
    background-image: url(${url_background});
    background-position: 100% 100%;
    background-repeat: no-repeat repeat;
    background-size: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    image-rendering: pixelated;
    filter: hue-rotate(60deg);
    gap: ${measurements.bounding.middler};
`;
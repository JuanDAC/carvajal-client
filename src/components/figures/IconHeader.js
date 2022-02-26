import { url_icon } from "./figures.data";
import styled from "styled-components"

export const IconHeader = styled.figure`
    background-image: url(${url_icon});
    background-repeat: no-repeat;
    background-size: 100% 160px;
    background-position: center -20px;
    width: 150px;
    height: 100px;
`;
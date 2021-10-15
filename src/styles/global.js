import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        font-size: ${px2vw(24)};

        @media (min-width: 768px) {
            font-size: ${px2vw(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
        }
    }
`;

export default Global;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: url("https://cdn.midjourney.com/0d465ddc-0a76-481c-af30-7647375bd4de/grid_0.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }
`
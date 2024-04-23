import { createGlobalStyle } from "styled-components"
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
:root {
    --primary-color: #101828;
        --grey: #475467;
    --red: #E44848;
    --orange: #FFC531;
    --light:#F2F4F7;
    --white:#F7F7F7;
  }
  body {
    @font-face {
        font-family: "Inter";
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap') ,
      };
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   color:var(--primary-color);
    font-family: 'Inter';
    margin: 0;
  }
  h1{
    font-family: 'Inter';
   font-weight: 600;
   margin:0;
  }
  ul{
    margin:0;
list-style:none;
padding:0;
  }
  button{
    border-radius:200px;
    cursor:pointer;
    border:none;
    background-color:transparent;
  }
  a {
    text-decoration: none;
    color:white;
    display:flex;
}

`
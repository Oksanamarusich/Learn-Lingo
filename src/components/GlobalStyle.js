import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root{

}

body {
  
  margin: 0 auto;
  min-width: 100%;
  
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}

`;

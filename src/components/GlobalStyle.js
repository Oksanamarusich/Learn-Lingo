import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import RobotoBold from '../fonts/Roboto-Bold.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoItalic from '../fonts/Roboto-Italic.ttf';

export const GlobalStyle = createGlobalStyle`


:root{

}

@font-face{
  font-family: 'Roboto-Regular';
  src: local('Roboto-Regular'), url(${RobotoRegular}) format('ttf');
  font-weight: 400;
  font-style: normal;
};

@font-face{
  font-family: 'Roboto-Medium';
  src: local('Roboto-Medium'), url(${RobotoMedium}) format('ttf');
  font-weight: 500;
  font-style: normal;
};
@font-face{
  font-family: 'Roboto-Bold';
  src: local('Roboto-Bold'), url(${RobotoBold}) format('ttf');
  font-weight: 700;
  font-style: normal;
};
@font-face{
  font-family: 'Roboto-Italic';
  src: local('Roboto-Italic'), url(${RobotoItalic}) format('ttf');
  font-style: italic;
}

body {
  
  margin: 0 auto;
  min-width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight:400;
  
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

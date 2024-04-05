import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero.jsx';
import { useEffect, useState } from 'react';

import peach from '../../assets/img/peach.png';
import pink from '../../assets/img/pink.png';
import blue from '../../assets/img/blue.png';
import gray from '../../assets/img/gray.png';
import crimson from '../../assets/img/crimson.png';
import { ThemeProvider } from 'styled-components';
import {
  themeBlue,
  themeCrimson,
  themeGray,
  themePeach,
  themePink,
} from 'styles/themes';
import { HomeMain } from './Home.styled';

const pictures = [peach, pink, blue, gray, crimson];

export default function Home() {
  const [picture, setPicture] = useState(peach);
  const [selectedTheme, setSelectedTheme] = useState(themePeach);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pictures.length);

    setPicture(pictures[randomIndex]);

    switch (randomIndex) {
      case 0:
        setSelectedTheme(themePeach);
        break;
      case 1:
        setSelectedTheme(themePink);
        break;
      case 2:
        setSelectedTheme(themeBlue);
        break;
      case 3:
        setSelectedTheme(themeGray);
        break;
      case 4:
        setSelectedTheme(themeCrimson);
        break;

      default:
        break;
    }
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <HomeMain>
        <Hero picture={picture} />
        <Advantages />
      </HomeMain>
    </ThemeProvider>
  );
}

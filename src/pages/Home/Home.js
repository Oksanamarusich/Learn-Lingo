import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero.jsx';
import { useEffect, useState } from 'react';
import {
  themeGray,
  themePeach,
  themeBlue,
  themeCrimson,
  themePink,
} from 'styles/themes';
import peach from '../../assets/img/peach.png';
import pink from '../../assets/img/pink.png';
import blue from '../../assets/img/blue.png';
import gray from '../../assets/img/gray.png';
import crimson from '../../assets/img/crimson.png';

const pictures = [peach, pink, blue, gray, crimson];

export default function Home() {
  const [picture, setPicture] = useState(gray);
  const [theme, setTheme] = useState(themePeach);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pictures.length);

    setPicture(pictures[randomIndex]);

    switch (randomIndex) {
      case '0':
        setTheme(themePeach);
        break;
      case '1':
        setTheme(themePink);
        break;
      case '2':
        setTheme(themeBlue);
        break;
      case '3':
        setTheme(themeGray);
        break;
      case '4':
        setTheme(themeCrimson);
        break;

      default:
        break;
    }
  }, []);
  return (
    <main>
      <Hero style={theme} picture={picture} />
      <Advantages theme={theme} />
    </main>
  );
}

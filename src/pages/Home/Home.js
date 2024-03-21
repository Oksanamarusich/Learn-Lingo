import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero.jsx';
import { useEffect, useState } from 'react';

import peach from '../../assets/img/peach.png';
import pink from '../../assets/img/pink.png';
import blue from '../../assets/img/blue.png';
import gray from '../../assets/img/gray.png';
import crimson from '../../assets/img/crimson.png';

const pictures = [peach, pink, blue, gray, crimson];

export default function Home() {
  const [picture, setPicture] = useState(gray);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pictures.length);

    setPicture(pictures[randomIndex]);
  }, []);
  return (
    <main>
      <Hero picture={picture} />
      <Advantages />
    </main>
  );
}

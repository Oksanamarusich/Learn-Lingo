import { useState } from 'react';
import {
  BlockLanguage,
  ButtonLevel,
  ButtonLevelActive,
} from './LanguageLevel.styled';

export const LanguageLevel = ({ teacher }) => {
  const { levels } = teacher;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <BlockLanguage>
      {levels.map((level, index) => (
        <li key={index}>
          {active ? (
            <ButtonLevelActive  onClick={handleClick}>
              #{level}
            </ButtonLevelActive>
          ) : (
              <ButtonLevel  onClick={handleClick}>#{level}</ButtonLevel>
          )}
        </li>
      ))}
    </BlockLanguage>
  );
};

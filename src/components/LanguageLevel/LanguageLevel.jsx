import {
  BlockLanguage,
  ButtonLevel
} from './LanguageLevel.styled';

export const LanguageLevel = ({ teacher }) => {
  const { levels } = teacher;

  return (
    <BlockLanguage>
      {levels.map((level, index) => (
        <li key={index}>
          <ButtonLevel>#{level}</ButtonLevel>
        </li>
      ))}
    </BlockLanguage>
  );
};

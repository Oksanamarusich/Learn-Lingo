import {
  BlockLanguage,
  BlockLevel,
  BlockLevelActive,
  TextLevel,
} from './LanguageLevel.styled';

export const LanguageLevel = () => {
  return (
    <BlockLanguage>
      <BlockLevelActive>
        <TextLevel>#A1 Beginner</TextLevel>
      </BlockLevelActive>
      <BlockLevel>
        <TextLevel></TextLevel>
      </BlockLevel>
      <BlockLevel>
        <TextLevel></TextLevel>
      </BlockLevel>
      <BlockLevel>
        <TextLevel></TextLevel>
      </BlockLevel>
    </BlockLanguage>
  );
};

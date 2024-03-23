import {
  BlockLanguage,
  BlockLevel,
  BlockLevelActive,
  TextLevel,
} from './LanguageLevel.styled';

export const LanguageLevel = ({level}) => {
  return (
    <BlockLanguage>
      <BlockLevelActive>
        <TextLevel>#{level.levels[0]
        }</TextLevel>
      </BlockLevelActive>
      <BlockLevel>
        <TextLevel>#{level.levels
[1] }</TextLevel>
      </BlockLevel>
      <BlockLevel>
        <TextLevel>#{level.levels[2]}</TextLevel>
      </BlockLevel>
      <BlockLevel>
        <TextLevel>#{level.levels[3] }</TextLevel>
      </BlockLevel>
    </BlockLanguage>
  );
};

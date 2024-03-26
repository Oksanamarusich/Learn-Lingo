import { TiStarFullOutline } from 'react-icons/ti';

import { BookOpen } from 'components/icons/BookOpen';
import {
  Avatar,
  BlockRating,
  BlokIcon,
  BlokNameRating,
  BoxPhoto,
  Info,
  StyledSpan,
  StyledStatus,
  Subtitle,
  Text,
  TextBefore,
  TextUnderline,
  TitleName,
  WrapperInfoAboutTeacher,
} from './InfoAboutTeacher.styled';
import { IconHeart } from 'components/icons/IconHeart';
import { StatusIcon } from 'components/icons/StatusIcon';

export const InfoAboutTeacher = ({ teacher }) => {
  const {
    avatar_url,
    languages,
    name,
    lessons_done,
    rating,
    price_per_hour,
    lesson_info,
    conditions,
  } = teacher;
  return (
    <WrapperInfoAboutTeacher>
      <BoxPhoto>
        <StyledStatus>
          {' '}
          <StatusIcon />
        </StyledStatus>

        <Avatar src={avatar_url} alt="photo teacher" width="96" height="96" />
      </BoxPhoto>
      <div>
        <BlokNameRating>
          <div>
            <Subtitle>Languages</Subtitle>
            <TitleName>{name}</TitleName>
          </div>
          <BlockRating>
            <BlokIcon>
              <BookOpen />
              <TextBefore>Lessons online</TextBefore>
            </BlokIcon>

            <TextBefore>Lessons done: {lessons_done} </TextBefore>
            <BlokIcon>
              <TiStarFullOutline fill=" #ffc531" />
              <TextBefore>Rating: {rating} </TextBefore>
            </BlokIcon>
            <Text>
              Price/1hour: <StyledSpan>{price_per_hour}$</StyledSpan>{' '}
            </Text>
          </BlockRating>

          <IconHeart />
        </BlokNameRating>

        <Info>
          <Subtitle>Speaks: </Subtitle>
          <TextUnderline>{languages}</TextUnderline>
        </Info>
        <Info>
          <Subtitle>lesson info:</Subtitle>
          <Text>{lesson_info}</Text>
        </Info>
        <Info>
          <Subtitle>Conditions:</Subtitle>
          <Text>{conditions}</Text>
        </Info>
      </div>
    </WrapperInfoAboutTeacher>
  );
};

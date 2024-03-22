import { TiStarFullOutline } from 'react-icons/ti';

import { BookOpen } from 'components/icons/BookOpen';
import {
  BlockRating,
  BlokIcon,
  BlokNameRating,
  BoxPhoto,
  ContainerHeart,
  Info,
  StyledStatus,
  Subtitle,
  Text,
  TextUnderline,
  TitleName,
  WrapperInfoAboutTeacher,
} from './InfoAboutTeacher.styled';
import { IconHeart } from 'components/icons/IconHeart';
import { StatusIcon } from 'components/icons/StatusIcon';

export const InfoAboutTeacher = () => {
  return (
    <WrapperInfoAboutTeacher>
      <BoxPhoto>
        <StyledStatus>
          {' '}
          <StatusIcon />
        </StyledStatus>

        <img alt="" />
      </BoxPhoto>
      <div>
        <BlokNameRating>
          <div>
            <Subtitle>Languages</Subtitle>
            <TitleName>Name</TitleName>
          </div>
                  <BlockRating>
                      
            <BlokIcon>
              <BookOpen />
              <Text>Lessons online</Text>
            </BlokIcon>

            <Text>Lessons done: </Text>
            <BlokIcon>
              <TiStarFullOutline fill=" #ffc531" />
              <Text>Rating: </Text>
            </BlokIcon>
            <Text>Price/1hour: </Text>
            <ContainerHeart>
              <IconHeart />
            </ContainerHeart>
          </BlockRating>
        </BlokNameRating>

        <Info>
          <Subtitle>Speaks: </Subtitle>
          <TextUnderline>German,French</TextUnderline>
        </Info>
        <Info>
          <Subtitle>lesson info:</Subtitle>
          <Text>Lessons are structured</Text>
        </Info>
        <Info>
          <Subtitle>Conditions:</Subtitle>
          <Text>Welcome</Text>
        </Info>
      </div>
    </WrapperInfoAboutTeacher>
  );
};

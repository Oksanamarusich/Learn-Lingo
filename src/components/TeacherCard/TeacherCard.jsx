import Modal from 'react-modal';
import { InfoAboutTeacher } from 'components/InfoAboutTeacher/InfoAboutTeacher';
import { InfoReadMore } from 'components/InfoReadMore/InfoReadMore';

import { LanguageLevel } from 'components/LanguageLevel/LanguageLevel';
import { useState } from 'react';

import {
  ButtonBookTrial,
  ButtonMoreInfo,
  CardWrapper,
  WrapperLanguageLevel,
} from './TeacherCard.styled';
import { ModalBookTrial } from 'components/ModalBookTrial/ModalBookTrial';

export const TeacherCard = ({ index, teacher }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModal, setIsModal] = useState(false);
  
  const openModal = () => {
    setIsModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModal(false);
    document.body.style.overflow = '';
  }


  return (
    <CardWrapper key={index}>
      <InfoAboutTeacher teacher={teacher} />
      <WrapperLanguageLevel>
        {isReadMore ? (
          <InfoReadMore teacher={teacher} />
        ) : (
          <ButtonMoreInfo onClick={() => setIsReadMore(true)}>
            Read more
          </ButtonMoreInfo>
        )}

        <LanguageLevel teacher={teacher} />
        {isReadMore && (
          <ButtonBookTrial type="button" onClick ={openModal}>Book trial lesson</ButtonBookTrial>
        )}
      </WrapperLanguageLevel>
      <Modal
        isOpen={isModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
          onRequestClose={closeModal}>
        <ModalBookTrial onClose={closeModal} teacher={teacher} />
    </Modal>
    </CardWrapper>
    
  );
};

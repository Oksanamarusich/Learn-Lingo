import { LoadMoreButton } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ handleLoadMore }) => {
  return (
    <>
      <LoadMoreButton type="button" onClick={handleLoadMore}>
        Load more
      </LoadMoreButton>
    </>
  );
};

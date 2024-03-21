import { ThreeDots } from 'react-loader-spinner';
import { ContainerLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <ContainerLoader>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#f4c550"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </ContainerLoader>
  );
};

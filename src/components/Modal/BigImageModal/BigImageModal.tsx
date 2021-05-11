interface Props {
  largeImg: string;
}

const BigImageModal = ({ largeImg }: Props) => (
  <>
    <img src={largeImg} alt="" />
  </>
);

export default BigImageModal;

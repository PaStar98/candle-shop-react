export const InfoItem = ({ header, text }) => {
  return (
    <>
      <header>
        <h5>{header}</h5>
      </header>
      <p>{text}</p>
    </>
  );
};

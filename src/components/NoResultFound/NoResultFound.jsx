import image from "/src/assets/images/no-result-found-icon.png";

function NoResultFound({ children }) {
  return (
    <div className="no-result-found">
      <img src={image} alt="not-found.png" />
      {children}
    </div>
  );
}

export default NoResultFound;

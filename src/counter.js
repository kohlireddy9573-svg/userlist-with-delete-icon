const Userdetails = ({ fname, age, img, onDelete }) => {
  return (
    <div className="user-card">
      <img src={img} alt={fname} />
      <div className="user-info">
        <h2>{fname}</h2>
        <p>Age: {age}</p>
      </div>
      <button className="delete-btn" onClick={onDelete} title="Delete user">
        🗑️
      </button>
    </div>
  );
};

export default Userdetails;

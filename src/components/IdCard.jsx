function IdCard(props) {
  return (
    <div className="id-card">
      <div>
        <strong>Last Name:</strong> {props.lastName}
      </div>
      <div>
        <strong>First Name:</strong> {props.firstName}
      </div>
      <div>
        <strong>Gender:</strong> {props.gender}
      </div>
      <div>
        <strong>Height:</strong> {props.height / 100} m
      </div>
      <div>
        <strong>Birth:</strong> {props.birth.toDateString()}
      </div>
      <img src={props.picture} />
    </div>
  );
}
export default IdCard;

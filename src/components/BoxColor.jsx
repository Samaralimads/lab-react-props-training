function BoxColor(props) {
  return (
    <div
      className="boxColor"
      style={{ backgroundColor: rgb(props.r, props.g, props.b) }}
    >
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

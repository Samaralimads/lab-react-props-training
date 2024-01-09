function Random(props, children) {
  let randomNumber = 0;
  if (props.min > props.max) {
    randomNumber =
      Math.floor(Math.random() * (props.min - props.max)) + props.max;
  } else {
    randomNumber =
      Math.floor(Math.random() * (props.max - props.min)) + props.min;
  }

  return (
    <div>
      A number between {props.min}
      and {props.max} = {randomNumber}
    </div>
  );
}
export default Random;

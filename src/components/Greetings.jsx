function Greetings(props) {
  let greeting = "";

  switch (props.lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "pt":
      greeting = "Olá";
      break;
  }

  return (
    <div className="greetings">
      {greeting} {props.children}
    </div>
  );
}
export default Greetings;

import reactImage from "../assets/react-core-concepts.png";

const arrayElements = ["HTML", "REACT", "JSX", "CSS", "FRONTEND"];

function randomNumber() {
  return Math.floor(Math.random() * arrayElements.length);
}

export function Header() {
  const textElement = arrayElements[randomNumber()];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {textElement} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

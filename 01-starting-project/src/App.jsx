const arrayElements = ["HTML", "REACT", "JSX", "CSS", "FRONTEND"];

function randomNumber() {
  return Math.floor(Math.random() * arrayElements.length);
}

function Header() {
  const textElement = arrayElements[randomNumber()];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {textElement} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

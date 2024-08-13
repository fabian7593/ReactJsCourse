import componentImage from "./assets/components.png";

const arrayElements = ["HTML", "REACT", "JSX", "CSS", "FRONTEND"];

function randomNumber() {
  return Math.floor(Math.random() * arrayElements.length);
}

function Header() {
  const textElement = arrayElements[randomNumber()];
  return (
    <header>
      <img src={componentImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {textElement} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props){
  return (
    <li>
      <img src={props.imgSrc}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept 
              title="HTML" 
              description="HyperText Markup Language" 
              imgSrc={componentImage}/>
            <CoreConcept 
              title="HTML" 
              description="HyperText Markup Language" 
              imgSrc={componentImage}/>
            <CoreConcept 
              title="HTML" 
              description="HyperText Markup Language" 
              imgSrc={componentImage}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

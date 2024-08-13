
import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  const [ messageTab, setMessageTab ] = useState();

  function onClickTabButton(message){
    setMessageTab(message);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}/>

            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}/>

            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onSelected={onClickTabButton}>Component</TabButton> */}
            <TabButton onSelected={() => onClickTabButton("components")}>Component</TabButton>
            <TabButton onSelected={() => onClickTabButton("jsx")}>JSX</TabButton>
            <TabButton onSelected={() => onClickTabButton("props")}>Props</TabButton>
            <TabButton onSelected={() => onClickTabButton("state")}>State</TabButton>
          </menu>
          {!messageTab ? <p>Please select a tab</p> : null}

          {messageTab ? 
            <div id="tab-content">
              <h3>{EXAMPLES[messageTab].title}</h3>
              <p>{EXAMPLES[messageTab].description}</p>
              <pre>
                <code>{EXAMPLES[messageTab].code}</code>
              </pre>
            </div> 
          : null}
          
        </section>
      </main>
    </div>
  );
}

export default App;

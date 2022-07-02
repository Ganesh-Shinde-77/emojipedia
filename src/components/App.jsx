import React from "react";
import DictTerms from "./Dict-Terms";
import emojipedia from "../emojipedia";

// function for mapping using DictTerms component
function createCard(cards) {
  return (
    <DictTerms
      key={cards.id}
      emote={cards.emoji}
      emoteName={cards.name}
      emoteDescription={cards.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* mapping */}
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

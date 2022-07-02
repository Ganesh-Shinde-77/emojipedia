import React from "react";

// creating DictTerms component
function DictTerms(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emote}
        </span>
        <span>{props.emoteName}</span>
      </dt>
      <dd>{props.emoteDescription}</dd>
    </div>
  );
}

export default DictTerms;

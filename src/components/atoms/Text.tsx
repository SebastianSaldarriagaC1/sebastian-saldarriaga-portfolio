import React from "react";

interface TextProps {
  id?: string;
  extraClass?: string;
  text: string;
}

interface AnchorProps {
  text: string;
  href: string;
}

const SectionText: React.FC<TextProps> = ({ id, text, extraClass }) => {
  return (
    <h1 id={id} className={"section-text " + extraClass}>
      {text}
    </h1>
  );
};

const SubsectionText: React.FC<TextProps> = ({ id, text, extraClass }) => {
  return (
    <h2 id={id} className={"subsection-text " + extraClass}>
      {text}
    </h2>
  );
};

const Navbartext: React.FC<AnchorProps> = ({ text, href }) => {
  return (
    <a href={href} className={"navbar-text"}>
      {text}
    </a>
  );
};

const HeaderText: React.FC<TextProps> = ({ id, text, extraClass }) => {
  return (
    <p id={id} className={"header-text " + extraClass}>
      {text}
    </p>
  );
};

const ParagraphText: React.FC<TextProps> = ({ id, text, extraClass }) => {
  return (
    <p id={id} className={"paragraph-text " + extraClass}>
      {text}
    </p>
  );
};

// HighlightText component
interface HighlightTextProps {
  text: string;
  highlight?: string;
  id?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  highlight,
  id,
}) => {
  if (highlight === undefined) {
    return <h1>{text}</h1>;
  } else {
    const parts = text.split(highlight);

    return (
      <h1 id={id} className="header-text text-3xl sm:text-5xl">
        {parts[0]}
        <span className="highlight-text">{highlight}</span>
        {parts[1]}
      </h1>
    );
  }
};
// End HighlightText component

export {
  SectionText,
  SubsectionText,
  Navbartext,
  HeaderText,
  HighlightText,
  ParagraphText,
};

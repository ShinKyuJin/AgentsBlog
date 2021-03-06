import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  source: string;
}

const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  return (
    <Conatiner>
      <ReactMarkdown
        source={source.replace(/\n/g, "  \n")}
        renderers={{
          code: CodeBlock,
          inlineCode: InlineCodeBlock,
          blockquote: BlockQuoteBlock,
          image: Image,
          link: Link,
        }}
        skipHtml={false}
        escapeHtml={false}
      />
    </Conatiner>
  );
};

function Image(props: any) {
  const { alt, ...others } = props;
  return (
    <img
      alt={props.alt}
      {...others}
      style={{
        display: "flex",
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}

const InlineCodeBlock = (props: any) => {
  return (
    <code
      style={{
        background: "rgba(27, 31, 35, 0.05)",
        padding: "0.2rem 0.4rem",
        borderRadius: "3px",
      }}
    >
      {props.value}
    </code>
  );
};

const BlockQuoteBlock = (props: any) => {
  return (
    <blockquote
      style={{
        backgroundColor: "rgb(248,249,250)",
        padding: "1rem 1rem 1rem 2rem",
        margin: 5,
        display: "flex",
        flexWrap: "wrap",
        borderLeft: "4px solid rgb(32, 201, 151)",
      }}
    >
      {props.children}
    </blockquote>
  );
};

const CodeBlock = (props: any) => {
  return (
    <pre
      style={{
        background: "rgb(248,249,250)",
        color: "#000",
        padding: 10,
        lineHeight: 1.5,
      }}
    >
      <code>{props.value}</code>
    </pre>
  );
};

const Link = (props: any) => {
  const { value, children, href, ..._props } = props;
  return (
    <>
      <LinkContainer href={href} {..._props}>
        {children}
      </LinkContainer>
    </>
  );
};

const LinkContainer = styled.a`
  color: #0ca678;
  &:hover {
    color: #12b886;
    text-decoration: underline;
  }
`;

const Conatiner = styled.div`
  line-height: 1.7;
  color: rgb(34, 36, 38);
  & pre > code {
    display: block;
    overflow: scroll;
  }
`;

export default React.memo(Markdown);

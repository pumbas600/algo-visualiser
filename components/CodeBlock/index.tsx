import { CodeBlock as ReactCodeBlock } from 'react-code-blocks';

const CodeBlock = ({ text }: { text: string }) => {
  return <ReactCodeBlock language="python" text={text} />;
};

export default CodeBlock;

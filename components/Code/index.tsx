import { CodeBlock } from 'react-code-blocks';

const Code = ({ text }: { text: string }) => {
  return <CodeBlock language="python" text={text} />;
};

export default Code;

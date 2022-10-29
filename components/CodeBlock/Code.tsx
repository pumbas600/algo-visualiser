import { Code as ReactCode } from 'react-code-blocks';

const Code = ({ children }: { children: string }) => {
  return <ReactCode language="python" text={children} />;
};

export default Code;

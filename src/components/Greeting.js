import { useState } from 'react';
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>만나서 반가워!</Output>}
      {changedText && <Output>버튼 클릭 후 바뀐 텍스트</Output>}
      <button onClick={changeTextHandler}>
        클릭하면 텍스트 바뀜!
      </button>
    </div>
  );
};
export default Greeting;

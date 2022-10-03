import { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>만나서 반가워!</p>}
      {changedText && <p>버튼 클릭 후 바뀐 텍스트</p>}
      <button onClick={changeTextHandler}>
        클릭하면 텍스트 바뀜!
      </button>
    </div>
  );
};
export default Greeting;

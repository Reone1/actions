import { useState, useCallback, ChangeEventHandler } from "react";

const useTextField: (
  text: string
) => [string, ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>] = (
  intialText
) => {
  const [text, setText] = useState(intialText);
  const changeHanndler = useCallback(
    (e) => {
      const { value } = e.target;
      setText(value);
    },
    [text]
  );
  return [text, changeHanndler];
};

export default useTextField;

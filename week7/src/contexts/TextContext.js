import React, { createContext, useState } from "react";

export const TextContext = createContext({
  text: "",
  setText: () => {},
});

export const Provider = ({ children }) => {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};

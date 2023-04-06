/**
 * `react` kütüphanesinden default olarak export edilen değeri bir değişkene alarak
 * reactjs'nin hooklarını kullanabiliriz. Ayrıca süslü parantez yöntemiyle de
 * bu hooklara erişmek mümkün. İki yöntem de aynı neticeyi verir.
 */
import React from "react";
import { createContext, useState } from "react";

export const TokenContext = React.createContext({});
export const ExampleContext = createContext({});

export default function TokenContextProvider(props) {
  const [token, setToken] = React.useState(null);

  const contextValue = {
    token,
    setToken,
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {props.children}
    </TokenContext.Provider>
  );
}

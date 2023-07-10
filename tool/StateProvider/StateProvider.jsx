import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

const AppContext = createContext();

export function AppWrapper(props) {
  const router = useRouter();

  // Error message List ----------------------------------------------------------------
  const [warningMessage, setWarningMessage] = useState([]);
  useEffect(() => {
    if (warningMessage.length !== 0) {
      setTimeout(() => {
        setWarningMessage([]);
      }, 20000);
    }
  }, [warningMessage.length]);

  // Set Pop Up Warning Messages
  const sendWarning = async (type, title, msg) => {
    await new Promise((resolve) => {
      const newData = [{ id: uuid(), type: type, title: title, message: msg }];
      newData.push.apply(newData, warningMessage);
      resolve(newData);
    }).then((resolve) => {
      setWarningMessage(resolve);
    });
  };

  // OBJECT DATA ACCESS
  let sharedState = {
    // Error message List
    warningMessage,
    setWarningMessage,

    // Set Data Warning Messages
    sendWarning,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {props.children}
    </AppContext.Provider>
  );
}

// can import this hook and call to the values inside of that [sharedState]
// example to caal the object [useAppContext.obejectName]
export function useAppContext() {
  return useContext(AppContext);
}

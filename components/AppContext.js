import React from "react";
// import {getIntialData,applicationLang} from "../utils"
import { recent,program,series } from "../mocks/data";

const AppContext = React.createContext({});

const globalState = {
  resourses: null,
  recent_series: recent.Data,
  activeVideo:'_40O8BbkhGE',
  program:program.Data,
  series:series
};

export const Provider = ({ children }) => {
 const [state, setGlobalstate] = React.useState(globalState);


 const setVideo = video =>{
  setGlobalstate(prevState=>({...prevState,activeVideo:video}));
 }
  console.log("globalState", state);

  const getData = () =>
    getIntialData().then((data) => {
      console.log("DATA", data);
      setGlobalstate(prevState=>({...prevState,resourses:data}));
    });

  // const lang = applicationLang()
  // React.useEffect(() => {
  //   getData();
  // }, [lang]);

  return (
    <AppContext.Provider value={{ state, setGlobalstate,setVideo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;

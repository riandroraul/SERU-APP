import {createContext, useState, Dispatch, SetStateAction} from 'react';

interface DataContextType {
  data: object;
  setData: Dispatch<SetStateAction<{}>>;
}

const dataContextDefaultValues: DataContextType = {
  data: {},
  setData: () => {},
};

const DataContext = createContext(dataContextDefaultValues);

interface DataProviderProps {
  children: React.ReactNode;
}

const DataProvider = ({children}: DataProviderProps) => {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};

// import {createContext, useState} from 'react';

// const UserContext = createContext();

// const UserProvider = ({children}) => {
//   const [userdata, setUserdata] = useState([]);
//   const [token, setToken] = useState('');

//   return (
//     <UserContext.Provider value={{userdata, setUserdata, token, setToken}}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export {UserContext, UserProvider};

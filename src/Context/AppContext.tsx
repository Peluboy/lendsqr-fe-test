import { createContext, useState } from "react";
import { AppContextProps, AppContextValues } from "../Utilities/types";
import useUsers from "../Hook/users";

export const AppContext = createContext<AppContextValues | null>(null);

const AppContextProvider = ({ children }: AppContextProps) => {
  const { users, setUsers, isSendingRequest, selectedUser, getUserDetails } = useUsers();

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(users);

  const filterData = (searchValue: string) => {
    const lowercasedValue = searchValue.toLowerCase();
    const filtered = users.filter(user => 
      Object.values(user).some(val => 
        String(val).toLowerCase().includes(lowercasedValue)
      )
    );
    setFilteredData(filtered);
  };

  const totalUsers = users.length;
  const totalActiveUsers = users.filter((user) => user.status === "Active").length;
  const usersWithLoans = users.filter((user) => Number(user.education.loanPayment) > 0);
  const usersWithSavings = users.filter((user) => Number(user.accountBalance) > 0);
  const organizationsArray = users.map((user) => user.orgName);

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        users,
        setUsers,
        isSendingRequest,
        totalUsers,
        totalActiveUsers,
        usersWithLoans,
        usersWithSavings,
        selectedUser,
        getUserDetails,
        selectedOrganization: "",
        setSelectedOrganization: () => {},
        organizationsArray,
        filteredData,
        filterData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

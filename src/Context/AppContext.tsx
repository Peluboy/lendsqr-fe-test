import { createContext } from "react";
import { useUsers } from "../Hook/users";
import { AppContextProps, AppContextValues, User } from "../Utilities/types";

export const AppContext = createContext<AppContextValues | null>(null);

const AppContextProvider = ({ children }: AppContextProps) => {
  const { users, setUsers, isSendingRequest, selectedUser, getUserDetails } = useUsers(); // Include setUsers here

  const totalUsers = users.length;
  const totalActiveUsers = users.filter((user) => user.status === "Active").length;
  const usersWithLoans = users.filter((user) => Number(user.education.loanRepayment) > 0);
  const usersWithSavings = users.filter((user) => Number(user.accountBalance) > 0);
  const organizationsArray = users.map((user) => user.orgName);

  return (
    <AppContext.Provider
      value={{
        searchValue: "",
        setSearchValue: () => {},
        users,
        setUsers, // Provide setUsers here
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

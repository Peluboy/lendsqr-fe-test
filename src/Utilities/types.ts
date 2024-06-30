export type ButtonProps = {
    children: string;
    invalid?: boolean;
    isSendingRequest?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
  };

  export type CardProps = {
    children: React.ReactNode;
  };

  export type DropdownProps = {
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
    title: string;
  };
  
  
  export type InputProps = {
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    invalid?: boolean;
    value: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    children?: string; // Make children optional
  id: string;
  name?: string;
  };

  export type LayoutProps = {
    children?: React.ReactNode;
  };

export type User = {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    rating: number;
    customerId: string;
    phoneNumber: string;
    createdAt: string;
    profile: {
      gender: string;
      bvn: string;
      avatar: string;
      address: string;
      maritalStatus: string;
      children: string;
    };
    accountBalance: number;
    accountNumber: string;
    bankAccounts: string;
    guarantor: {
      firstName: string;
      lastName: string;
      relationship: string;
      email: string;
      phoneNumber: number;
    };
    education: {
      duration: string;
      level: string;
      officeEmail: string;
      employmentStatus: string;
      sector: string;
      monthlyIncome: string;
      loanPayment: number;
    };
    socials: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
    employmentStatus: string;
    isActive: boolean;
    status: string;
  lower: {
    income: number
  },
  higher: {
    income: number
  },
  office: {
    email: string
  }
  };

 export type AppContextProps = {
    children: React.ReactNode;
  };
  
  export type AppContextValues = {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    isSendingRequest: boolean;
    totalUsers: number;
    totalActiveUsers: number;
    usersWithLoans: User[];
    usersWithSavings: User[];
    selectedUser: User | null;
    getUserDetails: (id: number) => void;
    selectedOrganization: string;
    setSelectedOrganization: React.Dispatch<React.SetStateAction<string>>;
    organizationsArray: string[];
    filteredData: User[];
  filterData: (value: string) => void;
  };

 export interface TableFilterModalProps {
    onClose: () => void;
    onFilter: (filters: any) => void;
  }

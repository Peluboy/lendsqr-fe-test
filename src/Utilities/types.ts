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
    title: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    options: any[];
    onClick?: () => void;
  };
  
  export type InputProps = {
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    invalid?: boolean;
    value: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    children: string;
    htmlFor: string;
    id: string;
  };

  export type LayoutProps = {
    children?: React.ReactNode;
  };

export type User = {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
    profile: {
      firstName: string;
      lastName: string;
      gender: string;
      bvn: string;
      avatar: string;
      address: string;
    };
    accountBalance: string;
    accountNumber: string;
    guarantor: {
      firstName: string;
      lastName: string;
      gender: string;
      address: string;
    };
    education: {
      duration: string;
      level: string;
      officeEmail: string;
      employmentStatus: string;
      sector: string;
      monthlyIncome: string;
      loanRepayment: string;
    };
    socials: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
    employmentStatus: string;
    isActive: boolean;
    status: string;
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
  };

 export interface TableFilterModalProps {
    onClose: () => void;
    onFilter: (filters: any) => void;
  }
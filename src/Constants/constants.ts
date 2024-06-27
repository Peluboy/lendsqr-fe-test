export const USER_DASHBOARD_TABLE_HEADER: string[] = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];
  
  export const USER_STATUS_STYLES: Record<string, { background: string; color: string }> = {
    Inactive: { background: "#f5f5f7", color: "#545F7D" },
    Pending: { background: "#fdf7e5", color: "#E9B200" },
    Blacklisted: { background: "#fce6eb", color: "#E4033B" },
    Active: { background: "#f3fcf6", color: "#39CD62" },
  };
  
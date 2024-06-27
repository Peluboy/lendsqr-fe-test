import users from "../Assets/Icons/users.svg";
import guarantors from "../Assets/Icons/guarantors.svg";
import loans from "../Assets/Icons/loans.svg";
import decisionModels from "../Assets/Icons/decisionModels.svg";
import savings from "../Assets/Icons/savings.svg";
import loanRequests from "../Assets/Icons/loanRequests.svg";
import whiteLists from "../Assets/Icons/whitelists.svg";
import karma from "../Assets/Icons/karma.svg";
import organizations from "../Assets/Icons/home.svg";
import loanProducts from "../Assets/Icons/loanRequests.svg";
import savingsProducts from "../Assets/Icons/savingsProduct.svg";
import feesAndCharges from "../Assets/Icons/feesAndCharges.svg";
import transactions from "../Assets/Icons/transactions.svg";
import services from "../Assets/Icons/services.svg";
import serviceAccounts from "../Assets/Icons/serviceAccounts.svg";
import settlements from "../Assets/Icons/settlements.svg";
import reports from "../Assets/Icons/reports.svg";
import preferences from "../Assets/Icons/preferences.svg";
import feesAndPricing from "../Assets/Icons/feesAndPricing.svg";
import auditLogs from "../Assets/Icons/auditLogs.svg";

export const customerNavItems: {
  title: string;
  route: string;
  icon: string;
}[] = [
  {
    title: "Users",
    route: "/dashboard/users",
    icon: users,
  },
  {
    title: "Guarantors",
    route: "/dashboard/guarantors",
    icon: guarantors,
  },
  {
    title: "Loans",
    route: "/dashboard/loans",
    icon: loans,
  },
  {
    title: "Decision Models",
    route: "/dashboard/decision-models",
    icon: decisionModels,
  },
  {
    title: "Savings",
    route: "/dashboard/savings",
    icon: savings,
  },
  {
    title: "Loan Requests",
    route: "/dashboard/loan-requests",
    icon: loanRequests,
  },
  {
    title: "Whitelist",
    route: "/dashboard/whitelists",
    icon: whiteLists,
  },
  {
    title: "Karma",
    route: "/dashboard/karma",
    icon: karma,
  },
];

export const businessesNavItems: {
  title: string;
  route: string;
  icon: string;
}[] = [
  {
    title: "Organization",
    route: "/dashboard/organization",
    icon: organizations,
  },

  {
    title: "Loan Products",
    route: "/dashboard/loan-products",
    icon: loanProducts,
  },
  {
    title: "Savings Products",
    route: "/dashboard/savings-products",
    icon: savingsProducts,
  },
  {
    title: "Fees and Charges",
    route: "/dashboard/fees-and-charges",
    icon: feesAndCharges,
  },
  {
    title: "Transactions",
    route: "/dashboard/transactions",
    icon: transactions,
  },

  {
    title: "Services",
    route: "/dashboard/services",
    icon: services,
  },
  {
    title: "Service Account",
    route: "/dashboard/service-accounts",
    icon: serviceAccounts,
  },
  {
    title: "Settlements",
    route: "/dashboard/settlements",
    icon: settlements,
  },
  {
    title: "Reports",
    route: "/dashboard/reports",
    icon: reports,
  },
];

export const settingsNavItems: {
  title: string;
  route: string;
  icon: string;
}[] = [
  {
    title: "Preferences",
    route: "/dashboard/preferences",
    icon: preferences,
  },
  {
    title: "Fees and Pricing",
    route: "/dashboard/fees-and-pricing",
    icon: feesAndPricing,
  },
  {
    title: "Audit Logs",
    route: "/dashboard/audit-logs",
    icon: auditLogs,
  },
];

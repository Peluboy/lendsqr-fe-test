import { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import classes from './UserDetails.module.scss';
import backIcon from "../../Assets/Icons/back.svg"
import StarRating from '../../Components/ui-components/Rating/StarRating';
import Card from '../../Components/ui-components/Card/Card';
import Tabs from '../../Components/ui-components/Tabs/Tabs';

const UserDetails = ({ onBack }: { onBack: () => void }) => {
  const { selectedUser } = useContext(AppContext)!;
  const [activeTab, setActiveTab] = useState('General Details');

  if (!selectedUser) return null;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const formatAmount = (amount: number) => {
    return amount.toLocaleString('en-US');
  };

  return (
    <div className={classes.userDetailsContainer}>
      <button onClick={onBack}><img src={backIcon} alt="" /> <p>Back to Users</p></button>
      <div className={classes.userDetails}>
        <div className={classes.userDetailsTop}>
          <div className={classes.header}>User Details</div>
          <div className={classes.usersButton}>
            <button>BACKLIST USER</button>
            <button>ACTIVATE USER</button>
          </div>
        </div>
        <Card>
          <div className={classes.cardTopHeader}>
            <img src={selectedUser.profile.avatar} alt="" className={classes.userAvatar}/>
            <div className={classes.customerName}>
              <h3>{selectedUser.fullName}</h3>
              <p>{selectedUser.customerId}</p>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.usersTier}>
              <p>User's Tier</p>
              <StarRating rating={selectedUser.rating} />
            </div>
            <div className={classes.divider}></div>
            <div className={classes.customerName}>
              <h3>₦{formatAmount(selectedUser.accountBalance)}</h3>
              <p>{selectedUser.accountNumber}/{selectedUser.bankAccounts}</p>
            </div>
          </div>
          <Tabs onTabClick={handleTabClick} />
        </Card>
        <div className={classes.activeTabs}>
        <Card>
          {activeTab === 'General Details' && (
            <div className={classes.userInformation}>
                <div className={classes.personalInformation}>
                  <h4>Personal Information</h4>
                  <div className={classes.details}>
                    <div className={classes.detailsStyle}>
                      <span>FULL NAME</span>
                      <p>{selectedUser.fullName}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>PHONE NUMBER</span>
                      <p>{selectedUser.phoneNumber}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>EMAIL ADDRESS</span>
                      <p>{selectedUser.email}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>BVN</span>
                      <p>{selectedUser.profile.bvn}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>GENDER</span>
                      <p>{selectedUser.profile.gender}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>MARITAL STATUS</span>
                      <p>{selectedUser.profile.maritalStatus}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>CHILDREN</span>
                      <p>{selectedUser.profile.children}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>TYPE OF RESIDENCE</span>
                      <p>{selectedUser.profile.address}</p>
                    </div>
                  </div>
                  <div className={classes.horizontalDivider}></div>
                  <h4>Education and Employment</h4>
                  <div className={classes.details}>
                    <div className={classes.detailsStyle}>
                      <span>LEVEL OF EDUCATION</span>
                      <p>{selectedUser.education.level}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>EMPLOYMENT STATUS</span>
                      <p>{selectedUser.education.employmentStatus}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>SECTOR OF EMPLOYMENT</span>
                      <p>{selectedUser.education.sector}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>DURATION OF EMPLOYMENT</span>
                      <p>{selectedUser.education.duration} years</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>OFFICE EMAIL</span>
                      <p>{selectedUser.office.email}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>MONTHLY INCOME</span>
                      <p>₦{formatAmount(selectedUser.lower.income)} - ₦{formatAmount(selectedUser.higher.income)}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>LOAN REPAYMENT</span>
                      <p>₦{formatAmount(selectedUser.education.loanPayment)}</p>
                    </div>
                
                  </div>
                  <div className={classes.horizontalDivider}></div>
                  <h4>Socials</h4>
                  <div className={classes.details}>
                    <div className={classes.detailsStyle}>
                      <span>TWITTER</span>
                      <p>{selectedUser.socials.twitter}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>FACEBOOK</span>
                      <p>{selectedUser.socials.facebook}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>INSTAGRAM</span>
                      <p>{selectedUser.socials.instagram}</p>
                    </div>
                
                  </div>
                  <div className={classes.horizontalDivider}></div>
                  <h4>Guarantor</h4>
                  <div className={classes.details}>
                  <div className={classes.detailsStyle}>
                      <span>FULL NAME</span>
                      <p>{selectedUser.guarantor.firstName} {selectedUser.guarantor.lastName}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>PHONE NUMBER</span>
                      <p>{selectedUser.guarantor.phoneNumber}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>EMAIL ADDRESS</span>
                      <p>{selectedUser.guarantor.email}</p>
                    </div>
                    <div className={classes.detailsStyle}>
                      <span>RELATIONSHIP</span>
                      <p>{selectedUser.guarantor.relationship}</p>
                    </div>
                  </div>
                </div>
            </div>
            )}
          </Card>
        </div>
         
      </div>
    </div>
  );
};

export default UserDetails;

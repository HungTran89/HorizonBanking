import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Hung", lastName: "Tran", email: "hungptran89@outlook.com" };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox type='greeting' title="welcome" user={loggedIn.firstName || "Guest"} subtext="" />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={420350.69}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn} 
        transactions={[]} 
        banks={[{currentBalance: 500.50}, {currentBalance: 123.50}]} />
    </section>
  )
}

export default Home
'use client';

import './globals.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createContext, useState } from 'react';
import Provider from '@/components/Provider';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';
import Media from '@/utils/media';
import CreateModal from '@/components/createModal';

export const metadata = {
  title: 'Admin Project',
  description: 'User management data',
};
export const SidebarContext = createContext(null);

export default function RootLayout({ children }) {
  const [agents, setAgents] = useState(false);
  const [drivers, setDrivers] = useState(false);
  const [customers, setCustomers] = useState(false);
  const [brokers, setBrokers] = useState(false);
  const [shippingCompanies, setShippingCompanies] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [minimizeSidebar, setMinimizeSidebar] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [filterHere, setFilterHere] = useState(false);
  const [date, setDate] = useState(false);
  const [address, setAddress] = useState(false);
  const [uName, setUName] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const { mobile, tabletAndDesktop } = Media();

  return (
    <html lang="en">
      <body>
        <Provider>
          <SidebarContext.Provider
            value={{
              agents,
              setAgents,
              drivers,
              setDrivers,
              customers,
              setCustomers,
              brokers,
              setBrokers,
              shippingCompanies,
              setShippingCompanies,
              employees,
              setEmployees,
              minimizeSidebar,
              setMinimizeSidebar,
              toggleDropdown,
              setToggleDropdown,
              filterHere,
              setFilterHere,
              date,
              setDate,
              address,
              setAddress,
              uName,
              setUName,
              createModal,
              setCreateModal,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                margin: 0,
                padding: 0,
                overflowX: 'hidden',
                flexDirection: 'column',
              }}
            >
              {mobile && (
                <>
                  <Nav />
                  <Sidebar />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '20px',
                      width: '100%',
                    }}
                  >
                    {children}
                  </div>
                </>
              )}
              {tabletAndDesktop && (
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <Sidebar />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: minimizeSidebar ? '95%' : '77%',
                    }}
                  >
                    <Nav />
                    {children}
                  </div>
                </div>
              )}
            </div>
          </SidebarContext.Provider>
        </Provider>
      </body>
    </html>
  );
}

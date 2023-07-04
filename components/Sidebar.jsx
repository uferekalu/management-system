'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import Media from '@/utils/media';
import { Form } from 'react-bootstrap';
import SidebarContent from './SidebarContent';
import { SidebarContext } from '@/app/layout';
import SidebarMobile from './SidebarMobile';

export default function Sidebar() {
  const router = useRouter();
  const ref = useRef();
  const [toggleAgentBackground, setToggleAgentBackground] = useState(false);
  const [toggleDriverBackground, setToggleDriverBackground] = useState(false);
  const [toggleCustomersBackground, setToggleCustomersBackground] =
    useState(false);
  const [toggleBrokersBackground, setToggleBrokersBackground] = useState(false);
  const [
    toggleShippingCompaniesBackground,
    setToggleShippingCompaniesBackground,
  ] = useState(false);
  const [toggleEmployeesBackground, setToggleEmployeesBackground] =
    useState(false);
  const [searchbarBg, setSearchbarBg] = useState(false);
  const {
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
  } = useContext(SidebarContext);
  const { mobile, tabletAndDesktop } = Media();

  useEffect(() => {
    const handler = (event) => {
      if (
        toggleDropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setToggleDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [toggleDropdown, setToggleDropdown]);

  return (
    <>
      {mobile && (
        <>
          <div
            style={
              toggleDropdown
                ? {
                    display: 'block',
                    position: 'absolute',
                    width: '60%',
                    top: '72px',
                    right: 0,
                    background:
                      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,75,1) 0%, rgba(4,3,60,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)',
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
              }}
            >
              <SidebarMobile
                setToggleAgentBackground={setToggleAgentBackground}
                toggleAgentBackground={toggleAgentBackground}
                setToggleDriverBackground={setToggleDriverBackground}
                toggleDriverBackground={toggleDriverBackground}
                setToggleCustomersBackground={setToggleCustomersBackground}
                toggleCustomersBackground={toggleCustomersBackground}
                setToggleBrokersBackground={setToggleBrokersBackground}
                toggleBrokersBackground={toggleBrokersBackground}
                setToggleShippingCompaniesBackground={
                  setToggleShippingCompaniesBackground
                }
                toggleShippingCompaniesBackground={
                  toggleShippingCompaniesBackground
                }
                setToggleEmployeesBackground={setToggleEmployeesBackground}
                toggleEmployeesBackground={toggleEmployeesBackground}
              />
            </div>
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 20px',
            width: minimizeSidebar ? '5%' : '23%',
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,75,1) 0%, rgba(4,3,60,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <i
              onClick={() => setMinimizeSidebar(false)}
              style={{
                color: 'white',
                cursor: 'pointer',
              }}
              className="bi bi-database"
            ></i>
            {!minimizeSidebar && (
              <>
                <Form.Label
                  onClick={() => router.push('/')}
                  style={{
                    color: 'white',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  User Management
                </Form.Label>
                <i
                  onClick={() => setMinimizeSidebar(true)}
                  style={{
                    color: 'white',
                    marginLeft: 'auto',
                    cursor: 'pointer',
                  }}
                  className="bi bi-list"
                ></i>
              </>
            )}
          </div>
          <SidebarContent
            onMouseEnter={() => setToggleAgentBackground(true)}
            onMouseLeave={() => setToggleAgentBackground(false)}
            toggleState={toggleAgentBackground}
            className="bi bi-collection-fill"
            marginTop={minimizeSidebar ? '120px' : '100px'}
            caption="Agents"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setAgents(true);
              router.push('/agents');
            }}
            isClicked={agents}
            path="/agents"
            setClick={setAgents}
          />
          <SidebarContent
            onMouseEnter={() => setToggleDriverBackground(true)}
            onMouseLeave={() => setToggleDriverBackground(false)}
            toggleState={toggleDriverBackground}
            className="bi bi-truck"
            marginTop={minimizeSidebar ? '30px' : '10px'}
            caption="Drivers"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setDrivers(true);
              router.push('/drivers');
            }}
            isClicked={drivers}
            path="/drivers"
            setClick={setDrivers}
          />
          <SidebarContent
            onMouseEnter={() => setToggleCustomersBackground(true)}
            onMouseLeave={() => setToggleCustomersBackground(false)}
            toggleState={toggleCustomersBackground}
            className="bi bi-people"
            marginTop={minimizeSidebar ? '30px' : '10px'}
            caption="Customers"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setCustomers(true);
              router.push('/customers');
            }}
            isClicked={customers}
            path="/customers"
            setClick={setCustomers}
          />
          <SidebarContent
            onMouseEnter={() => setToggleBrokersBackground(true)}
            onMouseLeave={() => setToggleBrokersBackground(false)}
            toggleState={toggleBrokersBackground}
            className="bi bi-people"
            marginTop={minimizeSidebar ? '30px' : '10px'}
            caption="Brokers"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setBrokers(true);
              router.push('/brokers');
            }}
            isClicked={brokers}
            path="/brokers"
            setClick={setBrokers}
          />
          <SidebarContent
            onMouseEnter={() => setToggleShippingCompaniesBackground(true)}
            onMouseLeave={() => setToggleShippingCompaniesBackground(false)}
            toggleState={toggleShippingCompaniesBackground}
            className="bi bi-truck-flatbed"
            marginTop={minimizeSidebar ? '30px' : '10px'}
            caption="Shipping Companies"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setShippingCompanies(true);
              router.push('/shipping-companies');
            }}
            isClicked={shippingCompanies}
            path="/shipping-companies"
            setClick={setShippingCompanies}
          />
          <SidebarContent
            onMouseEnter={() => setToggleEmployeesBackground(true)}
            onMouseLeave={() => setToggleEmployeesBackground(false)}
            toggleState={toggleEmployeesBackground}
            className="bi bi-people"
            marginTop={minimizeSidebar ? '30px' : '10px'}
            caption="Employees"
            minimizeSidebar={minimizeSidebar}
            setMinimizeSidebar={setMinimizeSidebar}
            handleClick={() => {
              setEmployees(true);
              router.push('/employees');
            }}
            isClicked={employees}
            path="/employees"
            setClick={setEmployees}
          />
          {!minimizeSidebar && (
            <input
              style={{
                display: 'flex',
                padding: '10px',
                width: '100%',
                borderRadius: '7px',
                border: '1px solid gray',
                fontSize: '14px',
                marginTop: '40px',
                height: '40px',
              }}
              type="text"
              placeholder="Search here"
              required
            />
          )}
          {minimizeSidebar && (
            <i
              onMouseEnter={
                minimizeSidebar ? () => setSearchbarBg(true) : undefined
              }
              onMouseLeave={
                minimizeSidebar ? () => setSearchbarBg(false) : undefined
              }
              onClick={() => setMinimizeSidebar(false)}
              style={{
                marginTop: minimizeSidebar && searchbarBg ? '50px' : '60px',
                color: 'white',
                cursor: 'pointer',
                background: searchbarBg ? 'teal' : undefined,
                padding: minimizeSidebar && searchbarBg ? '10px' : undefined,
                marginLeft:
                  minimizeSidebar && searchbarBg ? '-10px' : undefined,
                borderRadius:
                  minimizeSidebar && searchbarBg ? '6px' : undefined,
              }}
              className="bi bi-search"
            ></i>
          )}
        </div>
      )}
    </>
  );
}

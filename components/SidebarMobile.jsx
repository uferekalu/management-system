import { useContext, useEffect, useState } from 'react';
import SidebarContent from './SidebarContent';
import { SidebarContext } from '@/app/layout';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function SidebarMobile({
  setToggleAgentBackground,
  toggleAgentBackground,
  setToggleDriverBackground,
  toggleDriverBackground,
  setToggleCustomersBackground,
  toggleCustomersBackground,
  setToggleBrokersBackground,
  toggleBrokersBackground,
  setToggleShippingCompaniesBackground,
  toggleShippingCompaniesBackground,
  setToggleEmployeesBackground,
  toggleEmployeesBackground,
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
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
    setToggleDropdown,
    setCreateModal,
  } = useContext(SidebarContext);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const pathName = usePathname();
  return (
    <>
      {session?.user ? (
        <>
          <Button
            onClick={() => {
              setCreateModal(true);
              setToggleDropdown(false);
            }}
            style={{
              display: 'flex',
              height: '40px',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              padding: '10px 60px',
              background: 'transparent',
              fontSize: '13px',
              width: '100%',
              padding: '10px',
              gap: '10px',
              fontWeight: 600,
            }}
          >
            <i className="bi bi-file-plus"></i>
            Create{' '}
            {pathName === '/shipping-companies'
              ? pathName.split('-')[0].slice(1, 2).toUpperCase() +
                pathName.split('-')[0].slice(2)
              : pathName.slice(1, 2).toUpperCase() +
                pathName.slice(2, pathName.length - 1)}
          </Button>
          <Button
            onClick={() => {
              signOut();
              setToggleDropdown(false);
            }}
            style={{
              display: 'flex',
              height: '40px',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              padding: '10px 60px',
              background: 'transparent',
              fontSize: '13px',
              width: '100%',
              padding: '10px',
              gap: '10px',
              fontWeight: 600,
            }}
          >
            <i className="bi bi-box-arrow-in-left"></i>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                  setToggleDropdown(false);
                }}
                style={{
                  display: 'flex',
                  height: '40px',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '5px',
                  padding: '10px 60px',
                  fontSize: '13px',
                  width: '100%',
                  padding: '10px',
                  gap: '10px',
                  fontWeight: 600,
                  background: 'transparent',
                }}
              >
                <i
                  style={{
                    width: '30px',
                    height: '30px',
                    color: 'white',
                  }}
                  className="bi bi-box-arrow-in-right"
                ></i>
                Sign In With Google
              </Button>
            ))}
        </>
      )}
      <SidebarContent
        onMouseEnter={() => setToggleAgentBackground(true)}
        onMouseLeave={() => setToggleAgentBackground(false)}
        toggleState={toggleAgentBackground}
        className="bi bi-collection-fill"
        marginTop="10px"
        caption="Agents"
        handleClick={() => {
          setAgents(true);
          router.push('/agents');
          setToggleDropdown(false);
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
        marginTop="10px"
        caption="Drivers"
        handleClick={() => {
          setDrivers(true);
          router.push('/drivers');
          setToggleDropdown(false);
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
        marginTop={'10px'}
        caption="Customers"
        handleClick={() => {
          setCustomers(true);
          router.push('/customers');
          setToggleDropdown(false);
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
        marginTop={'10px'}
        caption="Brokers"
        handleClick={() => {
          setBrokers(true);
          router.push('/brokers');
          setToggleDropdown(false);
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
        marginTop={'10px'}
        caption="Shipping Companies"
        handleClick={() => {
          setShippingCompanies(true);
          router.push('/shipping-companies');
          setToggleDropdown(false);
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
        marginTop={'10px'}
        caption="Employees"
        handleClick={() => {
          setEmployees(true);
          router.push('/employees');
          setToggleDropdown(false);
        }}
        isClicked={employees}
        path="/employees"
        setClick={setEmployees}
      />
    </>
  );
}

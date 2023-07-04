import Media from '@/utils/media';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { SidebarContext } from '@/app/layout';

export default function Nav() {
  const { data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const { toggleDropdown, setToggleDropdown, createModal, setCreateModal } =
    useContext(SidebarContext);
  const [mobileSearch, setMobileSearch] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const pathName = usePathname();
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      {mobile && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
              height: '72px',
              width: '100%',
              gap: '10px',
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
                style={{
                  color: 'white',
                  marginLeft: 'auto',
                  cursor: 'pointer',
                }}
                className="bi bi-database"
              ></i>
              <Form.Label
                onClick={() => router.push('/')}
                style={
                  mobileSearch
                    ? {
                        display: 'none',
                      }
                    : {
                        color: 'white',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }
                }
              >
                User Management
              </Form.Label>
            </div>
            <i
              onClick={() => setMobileSearch(false)}
              style={
                mobileSearch
                  ? {
                      display: 'block',
                      position: 'absolute',
                      color: 'black',
                      cursor: 'pointer',
                      marginLeft: '35px',
                      marginTop: '3px',
                      zIndex: 100,
                    }
                  : {
                      display: 'none',
                    }
              }
              className={'bi bi-x'}
            ></i>
            <input
              style={
                mobileSearch
                  ? {
                      display: 'flex',
                      padding: '10px 30px',
                      width: '200px',
                      borderRadius: '7px',
                      border: '1px solid gray',
                      fontSize: '14px',
                      height: '30px',
                    }
                  : {
                      display: 'none',
                    }
              }
              type="text"
              placeholder="Search here"
              required
            />
            <i
              onClick={() => setMobileSearch(true)}
              style={
                mobileSearch
                  ? {
                      display: 'none',
                    }
                  : {
                      color: 'white',
                      marginLeft: 'auto',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }
              }
              className={'bi bi-search'}
            ></i>
            <i
              onClick={() => setToggleDropdown((prevState) => !prevState)}
              style={{
                color: 'white',
                marginLeft: 'auto',
                cursor: 'pointer',
                fontWeight: 600,
              }}
              className={toggleDropdown ? 'bi bi-x-circle-fill' : 'bi bi-list'}
            ></i>
          </div>
        </>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
            height: '72px',
            width: '100%',
            gap: '10px',
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,4,75,1) 0%, rgba(4,3,60,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)',
          }}
        >
          {session?.user ? (
            <>
              <Button
                onClick={() => setCreateModal(true)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '36px',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '5px',
                  background: 'teal',
                  fontSize: '12px',
                }}
              >
                Create{' '}
                {pathName === '/shipping-companies'
                  ? pathName.split('-')[0].slice(1, 2).toUpperCase() +
                    pathName.split('-')[0].slice(2)
                  : pathName.slice(1, 2).toUpperCase() +
                    pathName.slice(2, pathName.length - 1)}
              </Button>
              <Button
                onClick={signOut}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '36px',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '5px',
                  background: 'black',
                  fontSize: '12px',
                }}
              >
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
                    }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '36px',
                      border: '0.5px solid rgba(0, 0, 0, 0.04)',
                      boxShadow:
                        '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                      borderRadius: '5px',
                      background: 'black',
                      fontSize: '12px',
                    }}
                  >
                    Sign In With Google
                  </Button>
                ))}
            </>
          )}
        </div>
      )}
    </>
  );
}

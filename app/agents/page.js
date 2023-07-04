'use client';

import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import styles from '../page.module.css';
import Media from '@/utils/media';
import FilterSort from '@/components/filterSort';
import MobileFilter from '@/components/mobileFilter';
import Image from 'next/image';
import AgentMobileContent from '@/components/agentMobileContent';
import CreateModal from '@/components/createModal';
import { SidebarContext } from '../layout';

const agentHeaders = [
  'Agent No',
  'Date Added',
  'Name',
  'Address',
  'phone',
  'Actions',
];
const agentData = [
  {
    agentNo: '0001',
    dateAdded: '22/07/2022',
    name: 'Ufere Goodnews',
    address: 'Greenland Estate, Lagos',
    phone: '08130149426',
    actions: [
      '/assets/images/btneye.png',
      '/assets/images/btnedit.png',
      '/assets/images/rateadmin.png',
    ],
  },
  {
    agentNo: '0001',
    dateAdded: '22/07/2022',
    name: 'Ufere Goodnews',
    address: 'Greenland Estate, Lagos',
    phone: '08130149426',
    actions: [
      '/assets/images/btneye.png',
      '/assets/images/btnedit.png',
      '/assets/images/rateadmin.png',
    ],
  },
];

export default function Agents() {
  const { createModal, setCreateModal } = useContext(SidebarContext);
  const { mobile, tabletAndDesktop } = Media();
  return (
    <main className={styles.main}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: mobile ? undefined : '10px',
        }}
      >
        <CreateModal
          createModal={createModal}
          setCreateModal={setCreateModal}
          style={{
            marginLeft: mobile ? undefined : '120px',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px auto',
            border: '0.5px solid rgba(0, 0, 0, 0.04)',
            boxShadow:
              '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '5px',
            padding: '10px',
            width: mobile ? '100%' : '50%',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
            }}
          >
            Agents Management
          </Form.Label>
        </div>
        {mobile && (
          <>
            <MobileFilter />
            <AgentMobileContent />
          </>
        )}
        {tabletAndDesktop && (
          <>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <FilterSort caption="Date" />
                <FilterSort caption="Address" />
                <FilterSort caption="Name" />
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: '12px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '12px',
                    color: 'black',
                    marginTop: '8px',
                  }}
                >
                  Sort by:
                </Form.Label>
                <FilterSort caption="Agent No" />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '5px',
                padding: '20px',
                marginTop: '20px',
                background:
                  'linear-gradient(0deg, rgba(34,195,166,1) 0%, rgba(112,253,45,1) 100%)',
                gap: '10px',
              }}
            >
              {agentHeaders.map((header, idx) => (
                <div
                  key={`${header}-${idx}`}
                  style={{
                    width: '16%',
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: '12px',
                      color: 'black',
                      fontWeight: 600,
                    }}
                  >
                    {header.toUpperCase()}
                  </Form.Label>
                </div>
              ))}
            </div>
            {agentData.map((data, idx) => (
              <div
                key={`${data.agentNo}-${idx}`}
                style={{
                  display: 'flex',
                  width: '100%',
                  border: '0.5px solid rgba(0, 0, 0, 0.04)',
                  boxShadow:
                    '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '5px',
                  padding: '20px',
                  gap: '10px',
                  marginTop: '10px',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontWeight: 400,
                    width: '16%',
                  }}
                >
                  {data.agentNo}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontWeight: 400,
                    width: '16%',
                  }}
                >
                  {data.dateAdded}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontWeight: 400,
                    width: '16%',
                  }}
                >
                  {data.name}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontWeight: 400,
                    width: '16%',
                  }}
                >
                  {data.address}
                </Form.Label>
                <Form.Label
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontWeight: 400,
                    width: '16%',
                  }}
                >
                  {data.phone}
                </Form.Label>
                <div
                  style={{
                    display: 'flex',
                    width: '16%',
                    gap: '10px',
                  }}
                >
                  {data.actions.map((dt, idx) => (
                    <Image
                      style={{
                        cursor: 'pointer',
                      }}
                      key={`${dt}-${idx}`}
                      src={dt}
                      width="25"
                      height="25"
                      alt="icon"
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

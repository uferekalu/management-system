import Image from 'next/image';
import CommonText from './common/commonText';
import { useState } from 'react';

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

const actionData = [
  '/assets/images/btneye.png',
  '/assets/images/btnedit.png',
  '/assets/images/rateadmin.png',
];

export default function AgentMobileContent(props) {
  const [detailId, setDetailId] = useState();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        {agentData.map((data, idx) => (
          <div
            key={`${data}-${idx}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              padding: '10px',
            }}
          >
            <Image
              onClick={
                detailId === idx ? () => setDetailId() : () => setDetailId(idx)
              }
              style={{
                cursor: 'pointer',
              }}
              src={
                detailId === idx
                  ? '/assets/images/down.png'
                  : '/assets/images/up.png'
              }
              width="25"
              height="25"
              alt="icon"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CommonText
                fontWeight="600"
                caption="Agent No:"
                textTransform="uppercase"
              />
              <div
                style={
                  detailId === idx
                    ? {
                        display: 'flex',
                        flexDirection: 'column',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <CommonText
                  fontWeight="600"
                  caption="Date Added:"
                  textTransform="uppercase"
                />
                <CommonText
                  fontWeight="600"
                  caption="Name:"
                  textTransform="uppercase"
                />
                <CommonText
                  fontWeight="600"
                  caption="Address:"
                  textTransform="uppercase"
                />
                <CommonText
                  fontWeight="600"
                  caption="Phone:"
                  textTransform="uppercase"
                />
                <CommonText
                  fontWeight="600"
                  caption="Actions:"
                  textTransform="uppercase"
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CommonText fontWeight="400" caption={data.agentNo} />
              <div
                style={
                  detailId === idx
                    ? {
                        display: 'flex',
                        flexDirection: 'column',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <CommonText fontWeight="400" caption={data.dateAdded} />
                <CommonText fontWeight="400" caption={data.name} />
                <CommonText fontWeight="400" caption={data.address} />
                <CommonText fontWeight="400" caption="08130149426" />
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  {data.actions.map((dt, idx) => (
                    <Image
                      key={`${dt}-${idx}`}
                      style={{
                        cursor: 'pointer',
                      }}
                      src={dt}
                      width="25"
                      height="25"
                      alt="icon"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

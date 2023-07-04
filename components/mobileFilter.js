import Image from 'next/image';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import FilterSort from './filterSort';
import { SidebarContext } from '@/app/layout';

export default function MobileFilter(props) {
  const {
    filterHere,
    setFilterHere,
    date,
    setDate,
    address,
    setAddress,
    uName,
    setUName,
  } = useContext(SidebarContext);
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        {date ? (
          <FilterSort caption="Date" />
        ) : address ? (
          <FilterSort caption="Address" />
        ) : uName ? (
          <FilterSort caption="Name" />
        ) : (
          <Button
            onClick={() => setFilterHere((prevState) => !prevState)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #E7E7E7',
              padding: '10px',
              width: '120px',
              background: 'transparent',
              borderRadius: '6px',
              gap: '10px',
              color: 'black',
              fontSize: '12px',
            }}
          >
            {filterHere ? (
              <i
                style={{
                  color: 'black',
                  cursor: 'pointer',
                  marginTop: '3px',
                }}
                className={'bi bi-x'}
              ></i>
            ) : (
              <Image
                src="/assets/images/filter.png"
                width="15"
                height="15"
                alt="filter"
              />
            )}
            Filter here
          </Button>
        )}
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
        style={
          date || address || uName
            ? {
                display: 'none',
              }
            : filterHere
            ? {
                display: 'block',
                position: 'absolute',
                top: 220,
                left: 20,
                zIndex: 100,
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
            gap: '5px',
            background: 'white',
          }}
        >
          <div
            onClick={() => setDate(true)}
            style={{
              display: 'flex',
              padding: '10px',
              fontSize: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #E7E7E7',
              width: '120px',
            }}
          >
            By Date
          </div>
          <div
            onClick={() => setAddress(true)}
            style={{
              display: 'flex',
              padding: '10px',
              fontSize: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #E7E7E7',
              width: '120px',
            }}
          >
            By Address
          </div>
          <div
            onClick={() => setUName(true)}
            style={{
              display: 'flex',
              padding: '10px',
              fontSize: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #E7E7E7',
              width: '120px',
            }}
          >
            By Name
          </div>
        </div>
      </div>
      {(date || address || uName) && (
        <div
          onClick={() => {
            setFilterHere(true);
            setDate(false);
            setAddress(false);
            setUName(false);
          }}
          style={{
            fontSize: '12px',
            background: 'white',
            cursor: 'pointer',
            padding: '20px 10px',
            border: '1px solid #E7E7E7',
            borderRadius: '6px',
            width: '140px',
            display: 'block',
            position: 'absolute',
            top: 220,
            left: 20,
            zIndex: 100,
          }}
        >
          Back To Filter
        </div>
      )}
    </>
  );
}

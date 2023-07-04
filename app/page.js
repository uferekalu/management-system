'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Form } from 'react-bootstrap';
import Media from '@/utils/media';

export default function Home() {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <main className={styles.main}>
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '50px auto',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              padding: '20px',
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
              User Management System
            </Form.Label>
            <p
              style={{
                display: 'flex',
                fontSize: '12px',
                marginTop: '10px',
                textAlign: 'justify',
              }}
            >
              This is a typical management system of various sectors of a
              company. These include the Agents, Drivers Customers, Brokers,
              Shipping and Employees. Under each sector are some of their
              detailed information. You can see the list of all the users under
              each sector and view the detaiils but would only edit the users
              created by you. You would require authentication to register users
              under the different sectors.
            </p>
          </div>
        </>
      </main>
    </>
  );
}

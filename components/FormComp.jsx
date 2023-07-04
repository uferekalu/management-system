'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import Media from '@/utils/media';
import FormCompSwitches from './formCompSwitches';
import { SidebarContext } from '@/app/layout';
import FormCompContent from './FormCompContent';

export default function FormComp({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  const pathName = usePathname();
  const { agents, drivers, customers, brokers, shippingCompanies, employees } =
    useContext(SidebarContext);
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: '0px auto',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px auto',
          }}
        >
          <Form.Label
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              marginBottom: '20px',
            }}
          >
            {type}{' '}
            {pathName === '/shipping-companies'
              ? pathName.split('-')[0].slice(1, 2).toUpperCase() +
                pathName.split('-')[0].slice(2)
              : pathName.slice(1, 2).toUpperCase() +
                pathName.slice(2, pathName.length - 1)}
          </Form.Label>
        </div>
        {mobile && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                boxShadow:
                  '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '5px',
                padding: '20px 10px 10px 10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <FormCompSwitches
                  imgSrc={
                    agents
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={agents ? '600' : '400'}
                  caption="Agent"
                  disabled={agents ? false : true}
                />
                <FormCompSwitches
                  imgSrc={
                    drivers
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={drivers ? '600' : '400'}
                  caption="Driver"
                  disabled={drivers ? false : true}
                />
                <FormCompSwitches
                  imgSrc={
                    customers
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={customers ? '600' : '400'}
                  caption="Customer"
                  disabled={customers ? false : true}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <FormCompSwitches
                  imgSrc={
                    brokers
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={brokers ? '600' : '400'}
                  caption="Broker"
                  disabled={brokers ? false : true}
                />
                <FormCompSwitches
                  imgSrc={
                    shippingCompanies
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={shippingCompanies ? '600' : '400'}
                  caption="Shipping Company"
                  disabled={shippingCompanies ? false : true}
                />
                <FormCompSwitches
                  imgSrc={
                    employees
                      ? '/assets/images/selecteddot.png'
                      : '/assets/images/normaldot.png'
                  }
                  fontWeight={employees ? '600' : '400'}
                  caption="Employee"
                  disabled={employees ? false : true}
                />
              </div>
            </div>
          </>
        )}
        {tabletAndDesktop && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              border: '0.5px solid rgba(0, 0, 0, 0.04)',
              boxShadow:
                '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '5px',
              padding: '20px 10px 10px 10px',
            }}
          >
            <FormCompSwitches
              imgSrc={
                agents
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={agents ? '600' : '400'}
              caption="Agent"
              disabled={agents ? false : true}
            />
            <FormCompSwitches
              imgSrc={
                drivers
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={drivers ? '600' : '400'}
              caption="Driver"
              disabled={drivers ? false : true}
            />
            <FormCompSwitches
              imgSrc={
                customers
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={customers ? '600' : '400'}
              caption="Customer"
              disabled={customers ? false : true}
            />
            <FormCompSwitches
              imgSrc={
                brokers
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={brokers ? '600' : '400'}
              caption="Broker"
              disabled={brokers ? false : true}
            />
            <FormCompSwitches
              imgSrc={
                shippingCompanies
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={shippingCompanies ? '600' : '400'}
              caption="Shipping Company"
              disabled={shippingCompanies ? false : true}
            />
            <FormCompSwitches
              imgSrc={
                employees
                  ? '/assets/images/selecteddot.png'
                  : '/assets/images/normaldot.png'
              }
              fontWeight={employees ? '600' : '400'}
              caption="Employee"
              disabled={employees ? false : true}
            />
          </div>
        )}
        <FormCompContent
          handleSubmit={handleSubmit}
          post={post}
          setPost={setPost}
          submitting={submitting}
          type={type}
        />
      </div>
    </>
  );
}

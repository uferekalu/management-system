'use client';

import { SidebarContext } from '@/app/layout';
import { useContext } from 'react';

import FormCompContentAgent from './FormCompContentAgent';
import { useRouter } from 'next/navigation';

export default function FormCompContent({
  handleSubmit,
  post,
  setPost,
  submitting,
  type,
}) {
  const router = useRouter();
  const {
    agents,
    drivers,
    customers,
    brokers,
    shippingCompanies,
    employees,
    setCreateModal,
  } = useContext(SidebarContext);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '20px',
        }}
      >
        {agents && (
          <FormCompContentAgent
            post={post}
            setPost={setPost}
            submitting={submitting}
          />
        )}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '30px',
            width: '100%',
          }}
        >
          <button
            onClick={() => setCreateModal(false)}
            className="black_btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '10px',
              background: 'black',
              padding: '10px 20px',
              color: 'white',
              transition: 'all',
              textDecoration: 'none',
              width: '48%',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="outline_btn"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '10px',
              background: 'transparent',
              border: '1px solid black',
              padding: '10px 20px',
              color: 'black',
              transition: 'all',
              cursor: 'pointer',
              width: '48%',
            }}
          >
            {submitting
              ? type === 'Create'
                ? `${type.slice(0, type.length - 1)}ing...`
                : `${type}ing`
              : type}
          </button>
        </div>
      </form>
    </>
  );
}

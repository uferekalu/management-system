'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import GeneralModal from './modal';
import { useSession } from 'next-auth/react';
import { SidebarContext } from '@/app/layout';
import FormComp from './FormComp';

export default function CreateModal(props) {
  const router = useRouter();
  const { data: session } = useSession();
  const { agents } = useContext(SidebarContext);

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    agentNo: '',
    name: '',
    dateAdded: '',
    address: '',
    phone: '',
    regDoc: '',
    nameOfFirstGuarantor: '',
    addressOfFirstGuarantor: '',
    phoneOfFirstGuarantor: '',
    imageOfFirstGuarantor: '',
    nameOfSecondGuarantor: '',
    addressOfSecondGuarantor: '',
    phoneOfSecondGuarantor: '',
    imageOfSecondGuarantor: '',
    regDocName: '',
    imageOfFirstGuarantorName: '',
    imageOfSecondGuarantorName: '',
  });

  const createGeneric = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (agents) {
        const response = await fetch('/api/agent/new', {
          method: 'POST',
          body: JSON.stringify({
            userId: session?.user.id,
            agentNo: post.agentNo,
            name: post.name,
            dateAdded: post.dateAdded,
            address: post.address,
            phone: post.phone,
            regDoc: post.regDoc,
            firstGuarantor: {
              name: post.nameOfFirstGuarantor,
              address: post.addressOfFirstGuarantor,
              phone: post.phoneOfFirstGuarantor,
              img: post.imageOfFirstGuarantor,
            },
            secondGuarantor: {
              name: post.nameOfSecondGuarantor,
              address: post.addressOfSecondGuarantor,
              phone: post.phoneOfSecondGuarantor,
              img: post.imageOfSecondGuarantor,
            },
          }),
        });
        if (response.ok) {
          router.push('/agents');
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <GeneralModal
        size="lg"
        show={props.createModal}
        onHide={() => {
          props.setCreateModal(false);
        }}
        style={props.style}
      >
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: 0,
          }}
        >
          <div
            onClick={() => {
              props.setCreateModal(false);
            }}
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-0.8rem',
              cursor: 'pointer',
            }}
          >
            <Image
              src="/assets/images/close.png"
              width="14"
              height="14"
              alt="close"
            />
          </div>
          <FormComp
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createGeneric}
          />
        </Modal.Body>
      </GeneralModal>
    </>
  );
}

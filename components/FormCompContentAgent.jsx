import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import FormAgentContent from './FormAgentContent';
import ImageComp from './ImageComp';
import Media from '@/utils/media';

export default function FormCompContentAgent({ post, setPost, submitting }) {
  const hiddenRegDocInput = useRef(null);
  const hiddenFirstGuarantorsImageInput = useRef(null);
  const hiddenSecondGuarantorsImageInput = useRef(null);

  const { mobile, tabletAndDesktop } = Media();

  const handleRegDocClick = () => {
    hiddenRegDocInput.current.click();
  };

  const handleFirstGuarantorsImageClick = () => {
    hiddenFirstGuarantorsImageInput.current.click();
  };
  const handleSecondGuarantorsImageClick = () => {
    hiddenSecondGuarantorsImageInput.current.click();
  };

  const handleRegDocImgChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setPost({
        ...post,
        regDoc: e.target.result,
        regDocName: fileUploaded.name,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleFirstGuarantorsImgChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setPost({
        ...post,
        imageOfFirstGuarantor: e.target.result,
        imageOfFirstGuarantorName: fileUploaded.name,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSecondGuarantorsImgChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setPost({
        ...post,
        imageOfSecondGuarantor: e.target.result,
        imageOfSecondGuarantorName: fileUploaded.name,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <FormAgentContent
          caption="Agent Number"
          placeholder="Enter Agent number"
          value={post.agentNo}
          onChange={(e) => setPost({ ...post, agentNo: e.target.value })}
        />
        <FormAgentContent
          caption="Name of Agent"
          placeholder="Enter agent name"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <FormAgentContent
          caption="Date"
          placeholder="Enter date"
          value={post.dateAdded}
          onChange={(e) => setPost({ ...post, dateAdded: e.target.value })}
        />
        <FormAgentContent
          caption="Address of Agent"
          placeholder="Enter agent address"
          value={post.address}
          onChange={(e) => setPost({ ...post, address: e.target.value })}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <FormAgentContent
          caption="Phone number"
          placeholder="Enter phone number"
          value={post.phone}
          onChange={(e) => setPost({ ...post, phone: e.target.value })}
        />
        {mobile && (
          <FormAgentContent
            caption="First Guarantor's name"
            placeholder="Gurantor's first name"
            value={post.nameOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, nameOfFirstGuarantor: e.target.value })
            }
          />
        )}
        {tabletAndDesktop && (
          <div
            style={{
              display: 'flex',
              width: '48%',
              marginTop: '10px',
            }}
          >
            <ImageComp
              handleImageClick={handleRegDocClick}
              hiddenImageInput={hiddenRegDocInput}
              handleImageChange={handleRegDocImgChange}
              imgName={post.regDocName}
              caption="Choose Reg Document"
            />
          </div>
        )}
      </div>
      {mobile && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <ImageComp
            handleImageClick={handleRegDocClick}
            hiddenImageInput={hiddenRegDocInput}
            handleImageChange={handleRegDocImgChange}
            imgName={post.regDocName}
            caption="Choose Reg Document"
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="First Guarantor's name"
            placeholder="Gurantor's first name"
            value={post.nameOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, nameOfFirstGuarantor: e.target.value })
            }
          />
          <FormAgentContent
            caption="First Guarantor's address"
            placeholder="First Gurantor's address"
            value={post.addressOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, addressOfFirstGuarantor: e.target.value })
            }
          />
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="First Guarantor's address"
            placeholder="First Gurantor's address"
            value={post.addressOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, addressOfFirstGuarantor: e.target.value })
            }
          />
          <FormAgentContent
            caption="First Guarantor's phone"
            placeholder="First Gurantor's phone"
            value={post.phoneOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, phoneOfFirstGuarantor: e.target.value })
            }
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="First Guarantor's phone"
            placeholder="First Gurantor's phone"
            value={post.phoneOfFirstGuarantor}
            onChange={(e) =>
              setPost({ ...post, phoneOfFirstGuarantor: e.target.value })
            }
          />
          {tabletAndDesktop && (
            <div
              style={{
                display: 'flex',
                width: '48%',
                marginTop: '10px',
              }}
            >
              <ImageComp
                handleImageClick={handleFirstGuarantorsImageClick}
                hiddenImageInput={hiddenFirstGuarantorsImageInput}
                handleImageChange={handleFirstGuarantorsImgChange}
                imgName={post.imageOfFirstGuarantorName}
                caption="First Gurantor's image"
              />
            </div>
          )}
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <ImageComp
            handleImageClick={handleFirstGuarantorsImageClick}
            hiddenImageInput={hiddenFirstGuarantorsImageInput}
            handleImageChange={handleFirstGuarantorsImgChange}
            imgName={post.imageOfFirstGuarantorName}
            caption="First Gurantor's image"
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="Second Guarantor's name"
            placeholder="Gurantor's second name"
            value={post.nameOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, nameOfSecondGuarantor: e.target.value })
            }
          />
          <FormAgentContent
            caption="Second Guarantor's address"
            placeholder="Second Gurantor's address"
            value={post.addressOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, addressOfSecondGuarantor: e.target.value })
            }
          />
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="Second Guarantor's name"
            placeholder="Gurantor's second name"
            value={post.nameOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, nameOfSecondGuarantor: e.target.value })
            }
          />
          <FormAgentContent
            caption="2nd Guarantor's address"
            placeholder="2nd Gurantor's address"
            value={post.addressOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, addressOfSecondGuarantor: e.target.value })
            }
          />
        </div>
      )}
      {tabletAndDesktop && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="Second Guarantor's phone"
            placeholder="Second Gurantor's phone"
            value={post.phoneOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, phoneOfSecondGuarantor: e.target.value })
            }
          />
          {tabletAndDesktop && (
            <div
              style={{
                display: 'flex',
                width: '48%',
                marginTop: '10px',
              }}
            >
              <ImageComp
                handleImageClick={handleSecondGuarantorsImageClick}
                hiddenImageInput={hiddenSecondGuarantorsImageInput}
                handleImageChange={handleSecondGuarantorsImgChange}
                imgName={post.imageOfSecondGuarantorName}
                caption="Second Gurantor's image"
              />
            </div>
          )}
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            // justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <FormAgentContent
            caption="Second Guarantor's phone"
            placeholder="Second Gurantor's phone"
            value={post.phoneOfSecondGuarantor}
            onChange={(e) =>
              setPost({ ...post, phoneOfSecondGuarantor: e.target.value })
            }
            width="100%"
          />
        </div>
      )}
      {mobile && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <ImageComp
            handleImageClick={handleSecondGuarantorsImageClick}
            hiddenImageInput={hiddenSecondGuarantorsImageInput}
            handleImageChange={handleSecondGuarantorsImgChange}
            imgName={post.imageOfSecondGuarantorName}
            caption="Second Gurantor's image"
          />
        </div>
      )}
    </>
  );
}

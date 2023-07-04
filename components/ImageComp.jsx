import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';

export default function ImageComp(props) {
  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        <Button
          onClick={props.handleImageClick}
          style={{
            display: 'flex',
            gap: '5px',
            background: 'transparent',
            border: '1px solid #7CC427',
            padding: '5px',
            height: '40px',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'black',
            fontSize: '12px',
          }}
        >
          <Image
            src="/assets/images/imgupload.png"
            width="15"
            height="15"
            alt="close"
          />
          {props.caption}
        </Button>
        <input
          type="file"
          ref={props.hiddenImageInput}
          onChange={props.handleImageChange}
          style={{
            display: 'none',
          }}
        />
        {props.imgName ? (
          <Form.Label
            style={{
              fontSize: '12px',
              color: '#A6A6A6',
              fontWeight: 500,
              //   marginTop: '4px',
            }}
          >
            {props.imgName}
          </Form.Label>
        ) : (
          <Form.Label
            style={{
              fontSize: '14px',
              color: '#A6A6A6',
              fontWeight: 500,
              //   marginTop: '7px',
            }}
          >
            No picture chosen
          </Form.Label>
        )}
      </div>
    </>
  );
}

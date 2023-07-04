import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function FormCompSwitches(props) {
  return (
    <>
      <div
        disabled={props.disabled}
        style={{
          display: 'flex',
          gap: '7px',
        }}
      >
        <Image src={props.imgSrc} width="10" height="10" alt="close" />
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: props.fontWeight,
            color: 'black',
            marginTop: '-6px',
            cursor: props.disabled ? undefined : 'pointer',
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}

import { Form } from 'react-bootstrap';

export default function CommonText(props) {
  return (
    <>
      <Form.Label
        style={{
          fontSize: '12px',
          color: 'black',
          fontWeight: props.fontWeight,
          textTransform: props.textTransform,
          marginLeft: props.marginLeft,
        }}
      >
        {props.caption}
      </Form.Label>
    </>
  );
}

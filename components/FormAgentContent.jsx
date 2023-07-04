import { Form } from 'react-bootstrap';

export default function FormAgentContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: props.width ? props.width : '48%',
        }}
      >
        <Form.Label
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'black',
          }}
        >
          {props.caption}
        </Form.Label>
        <input
          style={{
            display: 'flex',
            width: '100%',
            padding: '10px',
            border: '1px solid gray',
            borderRadius: '6px',
            fontSize: '12px',
          }}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required
        />
      </div>
    </>
  );
}

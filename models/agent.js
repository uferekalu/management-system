import { Schema, model, models } from 'mongoose';

const AgentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  agentNo: {
    type: String,
    required: [true, 'Agent number is required'],
  },
  name: {
    type: String,
    required: [true, 'Name of Agent is required'],
  },
  dateAdded: {
    type: String,
    required: [true, 'Date is required'],
  },
  address: {
    type: String,
    required: [true, 'Address of Agent is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number of Agent is required'],
  },
  regDoc: {
    type: String,
    required: [true, 'Registration document is required'],
  },
  firstGuarantor: {
    name: {
      type: String,
      required: [true, 'Name of first guarantor is required'],
    },
    address: {
      type: String,
      required: [true, 'Address of first guarantor is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number of first guarantor is required'],
    },
    img: {
      type: String,
      required: [true, 'Image of first guarantor is required'],
    },
  },
  secondGuarantor: {
    name: {
      type: String,
      required: [true, 'Name of second guarantor is required'],
    },
    address: {
      type: String,
      required: [true, 'Address of second guarantor is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number of second guarantor is required'],
    },
    img: {
      type: String,
      required: [true, 'Image of second guarantor is required'],
    },
  },
});

const Agent = models.Agent || model('Agent', AgentSchema);

export default Agent;

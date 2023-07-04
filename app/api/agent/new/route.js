import Agent from '@/models/agent';
import { connectToDB } from '@/utils/database';

export const POST = async (request) => {
  const {
    userId,
    agentNo,
    name,
    dateAdded,
    address,
    phone,
    regDoc,
    firstGuarantor: {
      name: nameOfFirstGuarantor,
      address: addressOfFirstGuarantor,
      phone: phoneOfFirstGuarantor,
      img: imageOfFirstGuarantor,
    },
    secondGuarantor: {
      name: nameOfSecondGuarantor,
      address: addressOfSecondGuarantor,
      phone: phoneOfSecondGuarantor,
      img: imageOfSecondGuarantor,
    },
  } = await request.json();

  try {
    await connectToDB();

    const newAgent = new Agent({
      creator: userId,
      agentNo,
      name,
      dateAdded,
      address,
      phone,
      regDoc,
      firstGuarantor: {
        name: nameOfFirstGuarantor,
        address: addressOfFirstGuarantor,
        phone: phoneOfFirstGuarantor,
        img: imageOfFirstGuarantor,
      },
      secondGuarantor: {
        name: nameOfSecondGuarantor,
        address: addressOfSecondGuarantor,
        phone: phoneOfSecondGuarantor,
        img: imageOfSecondGuarantor,
      },
    });

    await newAgent.save();
    return new Response(JSON.stringify(newAgent), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to create a new Agent', { status: 500 });
  }
};

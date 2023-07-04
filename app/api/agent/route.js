import Agent from '@/models/agent';
import { connectToDB } from '@/utils/database';

export const GET = async (request) => {
  try {
    await connectToDB();

    const agents = await Agent.find({}).populate('creator');

    return new Response(JSON.stringify(agents), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to fetch all agents', { status: 500 });
  }
};

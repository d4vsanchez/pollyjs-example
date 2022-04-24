// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next'

type DogResponse = {
  message: string;
  status: 'success';
}

type Doggo = {
  breed: string;
  imageUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Doggo>
) {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const doggoInformation = await response.json() as DogResponse;

  // Get the breed of the dog
  const breed = doggoInformation.message.split('/')[4];

  res.status(200).json({ breed, imageUrl: doggoInformation.message });
}

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { name, email }: { name: string; email: string } = req.body;

    try {
      const newProduct = await prisma.product.create({
        data: { name, email },
      });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create a new product' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
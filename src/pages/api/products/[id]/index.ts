import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } else if (req.method === 'DELETE') {
    await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  }
}

export default handler

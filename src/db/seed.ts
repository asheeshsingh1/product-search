import { elasticClient } from '../clients/elasticClient';

const products = [
  { id: 1, name: 'Red Sneakers', description: 'Stylish red shoes for running' },
  { id: 2, name: 'Blue Jeans', description: 'Comfortable denim pants' },
  { id: 3, name: 'Black Jacket', description: 'Warm and cozy winter jacket' }
];

async function seed() {
  const index = 'products';

  // Create index
  const exists = await elasticClient.indices.exists({ index });
  if (!exists.body) {
    await elasticClient.indices.create({ index });
  }

  // Index documents
  for (const product of products) {
    await elasticClient.index({
      index,
      id: String(product.id),
      body: product
    });
  }

  await elasticClient.indices.refresh({ index });
  console.log('Seed complete');
}

seed().catch(console.error);
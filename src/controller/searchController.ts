import { Request, Response } from 'express';
import { redisClient } from '../clients/redisClient';
import { elasticClient } from '../clients/elasticClient';

const CACHE_TTL = 100; // seconds

export async function searchHandler(req: Request, res: Response) {
  const query = req.query.q as string;

  if (!query) {
    return res.status(400).json({ error: 'Missing query param ?q=' });
  }

  const cacheKey = `search:${query}`;

  // Check Redis
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.json({ source: 'cache', results: JSON.parse(cached) });
  }
  console.log(`Cache miss for query: ${query}`);

  // Query Elasticsearch
  const { body } = await elasticClient.search({
    index: 'products',
    body: {
      query: {
        multi_match: {
          query,
          fields: ['name^3', 'description']
        }
      }
    }
  });

  const hits = body.hits.hits.map((hit: any) => hit._source);

  // Cache in Redis
  await redisClient.set(cacheKey, JSON.stringify(hits), 'EX', CACHE_TTL);

  return res.json({ source: 'elasticsearch', results: hits });
}

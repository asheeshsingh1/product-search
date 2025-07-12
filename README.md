# 🧠 Product Search API

This is a full-stack backend project demonstrating how to use **Elasticsearch** for full-text search, **Redis** for caching, and **RedisInsight** and **Kibana** as dashboards — all built with **TypeScript** and **Express.js**.

---

## 🚀 Features

- 🔍 Full-text product search using **Elasticsearch**
- ⚡ In-memory caching of queries using **Redis**
- 🧰 Visual dashboards with:
  - **Kibana** (Elasticsearch query and visualization)
  - **RedisInsight** (Redis browser GUI)
- 📦 Dockerized setup for all dependencies

---

## 🧱 Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Project Setup

### 1. Clone the Repo

```bash
git clone https://github.com/asheeshsingh1/product-search.git
```


### 2. Install Dependencies
```bash
npm install
```

### 3. Start ES and Redis locall containers
```bash
docker-compose up -d
```

| Service        | Port  | Dashboard URL                            | Description                  |
|----------------|-------|-------------------------------------------|------------------------------|
| Elasticsearch  | 9200  | [http://localhost:9200](http://localhost:9200)     | Elasticsearch REST API       |
| Redis          | 6379  | [redis://localhost:6379](redis://localhost:6379)   | Redis CLI or Insight access |
| Kibana         | 5601  | [http://localhost:5601](http://localhost:5601)     | Elasticsearch GUI dashboard |
| RedisInsight   | 5540  | [http://localhost:5540](http://localhost:5540)     | Redis GUI client             |


### 4. 🌱 Seed Elasticsearch with Sample Data
```bash
npm run seed
```

### 5. 🧪 Start the Express API Server
```bash
npm run dev
```

Server will start on:
🔗 http://localhost:3000

🟢 Sample API Request:
```bash
GET http://localhost:3000/search?q=shoes
```
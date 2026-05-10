# Architecture

## Overview

AIStackAudit is a full-stack MERN application designed to analyze AI SaaS subscription spending and identify optimization opportunities for businesses and teams.

The system follows a client-server architecture where the frontend communicates with a REST API backend that processes audit logic and stores reports in MongoDB.

---

# System Architecture

```text
Frontend (React + Vite)
        ↓
REST API (Express.js)
        ↓
Business Logic Layer
        ↓
MongoDB Atlas Database
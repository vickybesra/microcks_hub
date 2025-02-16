# Microcks Hub Demo (SvelteKit)


## Getting Started

### Prerequisites

- Node.js v18+
- Docker 20.10+ & Docker Compose 2.4+
- Helm 3.8+ (for Kubernetes deployment)
- Kubernetes cluster (minikube, kind, or cloud provider)

## Development

### Local Setup

Clone repository:
   ```
   git clone https://github.com/vickybesra/microcks_hub.git
   cd microcks_hub
   ```
Install dependencies:
```
npm install
```
Start development server:

```
npm run dev
```

Access at: http://localhost:5173

## Deployment
Docker Deployment
Build image:
```
docker build -t vickybesra2000/microcks-hub .
```
Run container:
```
docker-compose up -d --build
```
Kubernetes/Helm Deployment:

Deploy to cluster:
```
helm upgrade --install microcks-hub ./helm/microcks_hub \
  --namespace microcks \
  --create-namespace
  ```

Verify deployment:
```
kubectl get deployments,svc,pods -n microcks
```

# Stage 1: Build the app
FROM node:19 as build
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production=false
COPY . ./
RUN npm run build

# Stage 2: Serve the built app
FROM node:19-alpine
WORKDIR /app
COPY --from=build /app .
# Set environment variable for the app to run on port 5173
ENV HOST=0.0.0.0
ENV PORT=5173
EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]

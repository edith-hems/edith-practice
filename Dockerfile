# Build stage
FROM node:18 AS builder
WORKDIR /app

# Copy dependency descriptors
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install --force

# Copy all remaining source code
COPY . .

# Build Vite project
RUN npm run build


# Serve stage
FROM node:alpine
WORKDIR /app

# Install 'serve' globally to serve static assets
RUN npm install -g serve

# Copy built frontend from builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]

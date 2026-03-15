# /landing/Dockerfile

# Etapa 1: Build
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN npm install
COPY . .
RUN npm run build 
# ⚠️ OJO: Verifica si tu Landing genera la carpeta 'dist', 'build' o 'out'.
# Si es Vite suele ser 'dist'. Si es Next.js estático es 'out'. Ajusta abajo 👇

# Etapa 2: Servidor Nginx
FROM nginx:alpine
# Ajusta '/app/dist' según corresponda a tu proyecto landing
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
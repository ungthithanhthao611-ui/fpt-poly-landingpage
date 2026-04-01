# BƯỚC 1: Build source code với Node.js
FROM node:20-alpine AS build-stage

# Chuyển thư mục làm việc vào /app
WORKDIR /app

# Copy package.json và package-lock.json trước để tận dụng cache
COPY package*.json ./

# Cài đặt toàn bộ dependencies (Dùng npm ci thay vì npm install để an toàn và nhanh hơn trên Docker)
RUN npm install --frozen-lockfile || npm install

# Copy toàn bộ mã nguồn vào image
COPY . .

# Build dự án (Vue/Vite sẽ xuất các tệp ra thư mục /dist)
RUN npm run build


# BƯỚC 2: Serve trang web ở chế độ Production bằng Nginx siêu nhẹ
FROM nginx:alpine AS production-stage

# Copy phần code tĩnh (từ Bước 1 đã build) vào thư mục mặc định của Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Mở Port 80
EXPOSE 80

# Thiết lập Nginx tự khởi động ngầm
CMD ["nginx", "-g", "daemon off;"]

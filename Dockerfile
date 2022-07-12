FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install


# Copy files
COPY . .

# Access to start.sh file
RUN chmod 755 ./start.sh

# Expose port 3000
EXPOSE 3000

# Executing commands
CMD ["./start.sh"]
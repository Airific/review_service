FROM node:12.18.2

RUN mkdir  /src/app

# Copy the current directory contents into the container at
COPY . /src/app

# Set the working directory to
WORKDIR /src/app

COPY package.json ./

# install dependencies
RUN npm install

# Make port 3003 available to the world outside this container
EXPOSE 3003

# Run the app when the container launches
CMD ["npm", "start"]
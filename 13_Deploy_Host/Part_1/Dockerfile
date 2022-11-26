# define the base Docker image
FROM node:14

# create the application directory
WORKDIR /usr/src/app

# copy the configuration files
# package.json and package-lock.json
COPY package*.json ./

# install the dependencies
RUN npm install
# alternatively in the production system:
# RUN npm install --production

# copy the source code files
COPY . .

# release of the port under which the 
# express server is running
EXPOSE 8001

# start the defined npm script
CMD [ "npm", "start" ]
# alternatively start in debug mode
# CMD [ "npm", "start:debug" ]

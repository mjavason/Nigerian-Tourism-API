# Nigerian Tourism API

The Nigerian Tourism API is a comprehensive solution designed to provide information related to tourism in Nigeria. It offers its services in 10 international and 3 local languages. Explore Nigeria's diverse culture, attractions, and travel experiences using this API. Currently hosted live at [Nigeria Tourism](https://nigerian-tourism-api.onrender.com)

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Getting Started

To set up and run the Nigerian Tourism API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/nigerian-tourism-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd nigerian-tourism-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory and set up the necessary environment variables (see the sample `.env` file below).

5. Build the TypeScript code:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Environment Variables

Before running the API, make sure to set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=xxxx
APP_NAME=TemplateApp
JWT_SECRET=user
MONGODB_URL=xxxx
MONGO_DB_NAME=xxxx
REFRESH_TOKEN_SECRET=xxxx
USERNAME=user@mail.com
SITE_LINK=xxxx
MAIL_ADDRESS=xxxx@mail.com
MAIL_PASSWORD=xxxx
API_DOCUMENTATION_URL=api.documentation.com
```

## Features

- **Tourist Information**: Get detailed information about tourist attractions, events, and accommodations in Nigeria.

- **Multilingual Support**: Enjoy multilingual support for various languages, making it accessible to a diverse audience.

- **User Authentication**: Register and authenticate users for personalized experiences.

- **Integration with External Services**: Utilize external services like Google Maps for enhanced mapping and navigation.

## Documentation

For detailed documentation on using the Nigerian Tourism API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJbzN99).

## Contributing

Contributions to the Nigerian Tourism API are welcome! To contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Test your changes thoroughly.

5. Create a pull request with a clear description of your changes.

Contributions that enhance functionality, data accuracy, and user experience are highly appreciated.

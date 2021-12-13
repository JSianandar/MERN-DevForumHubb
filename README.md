Quick Start 🚀
Add a default.json file in config folder with the following
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
Install server dependencies
npm install
Install client dependencies
cd frontend
npm install
Run both Express & React from root
npm run dev
Build for production
cd client
npm run build

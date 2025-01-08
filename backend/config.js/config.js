const cloudinary = require('cloudinary').v2;

// Log environment variables to verify they are loaded correctly
console.log("Cloud name:", process.env.REACT_APP_CLOUD_NAME);
console.log("Upload preset:", process.env.REACT_APP_UPLOAD_PRESET);
console.log("Token:", process.env.REACT_APP_CLOUDINARY_TOKEN);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
});

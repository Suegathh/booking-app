export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    try {
      console.log("Uploading to Cloudinary with URL:", url);
      console.log("Upload preset:", process.env.REACT_APP_UPLOAD_PRESET);
      console.log("Cloud name:", cloudName);
  
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from Cloudinary:", errorData);
        throw new Error("Something went wrong");
      }
  
      const data = await response.json();
      console.log("Upload successful:", data);
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  
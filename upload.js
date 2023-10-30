const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:"cfcunadoc",
    api_key:"121279647952858",
    api_secret:"PcZT5j4OaEyZjtUbZsC3iVCksO8",
    secure: true
})

  const Upload = async (imagePath)=>{
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      }
       try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.secure_url;
      } catch (error) {
        console.error(error);
      }
  }
  module.exports ={Upload}
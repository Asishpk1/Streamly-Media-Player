import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";


// API call for Adding Videos
export const addVideoAPI=async(videoDetails)=>{
   return await commonAPI('POST',`${SERVER_URL}/allVideos`,videoDetails)
}

// API call for Getting all Videos
export const getAllVideoAPI=async()=>{
   return await commonAPI('GET',`${SERVER_URL}/allVideos`,"")
}

//API call for Deleting Video
export const deleteVideoAPI=async(videoID)=>{

   return await commonAPI('DELETE',`${SERVER_URL}/allVideos/${videoID}`,"")
}

// API call for Saving Watch History
export const saveHistoryAPI=async(videoHistory)=>{
   return await commonAPI('POST',`${SERVER_URL}/History`,videoHistory)
}

// API call for Getting History
export const getHistoryAPI=async()=>{
   return await commonAPI('GET',`${SERVER_URL}/History`,"")
}

// API call for Deleting History
export const deleteHistoryAPI=async(videoID)=>{
   return await commonAPI('DELETE',`${SERVER_URL}/History/${videoID}`,"")
}

// API call for Adding Category
export const addCategoryAPI=async(CategoryNameVds)=>{
   return await commonAPI('POST',`${SERVER_URL}/Category`,CategoryNameVds)
}

// API call for Getting Category
export const getCategoryAPI=async()=>{
   return await commonAPI('GET',`${SERVER_URL}/Category`,"")
}

//API call for Deleting Category
export const deleteCategoryAPI=async(categoryID)=>{

   return await commonAPI('DELETE',`${SERVER_URL}/Category/${categoryID}`,"")
}

// API call for Updating Category
export const updateCategoryAPI=async(id,videoData)=>{

   return await commonAPI('PUT',`${SERVER_URL}/Category/${id}`,videoData)
}

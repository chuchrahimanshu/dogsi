// Import Section
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { APIError } from "./index.js";

// Utility functions for handling media
const uploadMediaToCloudinary = async (localFilePath, folderPath, mediaType) => {
    try {
        if(!localFilePath?.trim() || !folderPath?.trim() || !mediaType?.trim()){
            return null;
        }

        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: mediaType,
                folder: folderPath,
                unique_filename: true
            },
        );

        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return new APIError(500, "Uploading media to cloudinary", error);
    }
}

const deleteMediaFromCloudinary = async (public_id, mediaType) => {
    try {
        if(!public_id?.trim()) return null;

        const response = await cloudinary.uploader.destroy(
            public_id,
            {
                resource_type: mediaType
            } 
        );
        return response;
    } catch (error) {
        return new APIError(500, "Deleting media to cloudinary", error);
    }
}

// Export Section
export {
    uploadMediaToCloudinary,
    deleteMediaFromCloudinary
};
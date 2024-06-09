// Import Section
import mongoose from "mongoose";

// Schema Section
const productSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: [true, "Please provide product title / name."]
    },
    description: {
        type: String,
        required: [true, "Please provide product description"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    videos: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    quantity: {
        type: Number,
        min: 0,
        default: 0,
        required: [true, "Please provide product quantity"]
    },
    pricing: {
        mrp: {
            type: Number,
            min: 0,
            required: [true, "Please provide product MRP"]
        },
        discount: {
            type: Number,
            default: 0
        }
    },
    expirationDate: {
        type: Date,
        required: true
    },
    feedback: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Feedback",
            required: true
        }
    ],
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manufacturer",
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
});

// Exporting Model
export const Product = mongoose.model("Product", productSchema);
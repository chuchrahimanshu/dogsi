// Import Section
import mongoose from "mongoose";

// Schema Section
const contactSchema = new mongoose.Schema({
    contact:{
        type: Number,
        required: [true, "Please provide a valid mobile number"],
        unique: [true, "Mobile number already exists"],
        match: [/^\d{10}$/, "Please provide a valid mobile number"]
    },
    isPrimary: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

const addressSchema = new mongoose.Schema({
    houseNumber: {
        type: String,
        trim: true
    },
    street: {
        type: String,
        trim: true
    },
    district: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true,
        required: [true, "Please provide a valid city name"],
    },
    state: {
        type: String,
        trim: true,
        required: [true, "Please provide a valid state name"],
    },
    country: {
        type: String,
        trim: true,
        default: "India",
        immutable: true
    },
    zipCode: {
        type: String,
        trim: true,
        required: [true, "Please provide a valid zipcode"],
    },
    isPrimary: {
        type: Boolean,
        default: false
    }
});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "Please provide a valid firstname"]
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Please provide a valid lastname"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Please provide a valid email"],
        unique: [true, "Email already exists, Please sign in"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide a valid email"]
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Please provide a valid username"],
        unique: [true, "Username already taken, Please try again"],
        match: [/^[a-zA-Z0-9_]+$/, "Please provide a valid username"]
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$#&_-%*~^])[A-Za-z\d@$#&_-%*~^]{8,30}$/, "Please provide a valid password"]
    },
    address: [addressSchema],
    mobileNumber: [contactSchema],

    // TODO: Change this when you integrate Cloudinary
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    refreshToken: {
        token: {
            type: String,
            required: true,
        },
        rotation: {
            type: Date,
            default: Date.now()
        },
        expiration: {
            type: Date,
            required: true
        }
    }
}, {
    timestamps: true
});

// Exporting Model
export const User = mongoose.model("User", userSchema);
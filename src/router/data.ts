import { FieldsInfo, OptionsPlan } from "./types"

export const optionsPlan: OptionsPlan = {
    monthly: {
        data: [
            {
                name: "Arcade",
                image: "bg-icon-arcade",
                price: 9
            },
            {
                name: "Advanced",
                image: "bg-icon-advanced",
                price: 12
            },
            {
                name: "Pro",
                image: "bg-icon-pro",
                price: 15
            }
        ],
        suffix: "/mo"
    },
    yearly: {
        data: [
            {
                name: "Arcade",
                image: "bg-icon-arcade",
                price: 90,
                monthsFree: 2
            },
            {
                name: "Advanced",
                image: "bg-icon-advanced",
                price: 120,
                monthsFree: 2
            },
            {
                name: "Pro",
                image: "bg-icon-pro",
                price: 150,
                monthsFree: 2
            }
        ],
        suffix: "/yr"
    }
}

export const fieldsInfo : FieldsInfo[] = [
    {
        id: "name",
        name: "Name",
        placeholder: "e.g. Stephen King",
        type: "text",
        validations: { 
            required: { 
                value: true, 
                message: "This field is required" 
            }, 
            pattern: { 
                value: /^[A-Za-z\s]+$/i, 
                message: "Enter a valid name." 
            }
        }
    },
    {
        id: "email",
        name: "Email Address",
        placeholder: "e.g. stephenking@lorem.com",
        type: "email",
        validations: { 
            required: { 
                value: true, 
                message: "This field is required" 
            }, 
            pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                message: "Enter a valid email address." 
            }
        }
    },
    {
        id: "phone",
        name: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
        type: "text",
        validations: { 
            required: { 
                value: true, 
                message: "This field is required" 
            }, 
            pattern: { 
                value: /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/, 
                message: "Enter a valid phone number." 
            }
        }
    }
]
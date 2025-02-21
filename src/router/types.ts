import { HTMLInputTypeAttribute } from "react"

export type DataOptionPlan = {
    name: string
    image: string
    price: number
    monthsFree?: number
}

type OptionPlan = {
    data: DataOptionPlan[]
    suffix: "/mo" | "/yr"
}

export type OptionsPlan = {
    monthly: OptionPlan
    yearly: OptionPlan
}

export type InputsInfo = {
    name: string,
    email: string,
    phone: string
}

export type FieldsInfo = {
    id: "name" | "email" | "phone",
    name: string,
    placeholder: string,
    type: HTMLInputTypeAttribute,
    validations: Record<string, Record<string, string | boolean | RegExp>>
}
import { HTMLInputTypeAttribute } from "react"

export type DataPlan = {
    name: string
    price: number
    isMonthly?: boolean
    monthsFree?: number
}

export type DataOptionPlan = {
    image: string
} & DataPlan

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
    validations: Record<string, Record<string, string | boolean | RegExp> | Function>
}
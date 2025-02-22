import { create } from "zustand";
import { DataPlan, InputsInfo } from "../router/types";

type Data = {
    user?: InputsInfo
    plan?: DataPlan

    createUser: (user: InputsInfo) => void
    createPlan: (plan: DataPlan) => void
}

export const useDataStore = create<Data>((set) => ({
    createUser: (user: InputsInfo) => set(state => ({
        ...state,
        user
    })),
    createPlan: (plan: DataPlan) => set(state => ({
        ...state,
        plan
    }))
}))
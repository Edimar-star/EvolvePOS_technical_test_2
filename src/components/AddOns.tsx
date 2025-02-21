import { Main } from "../layout/Main";

export const AddOns = ({ stepActive, previousStep, nextStep } : { stepActive: number, previousStep: Function, nextStep: Function }) => {
    return <Main stepActive={stepActive}>Add-Ons</Main>
}
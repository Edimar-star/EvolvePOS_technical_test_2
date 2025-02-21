import { Main } from "../layout/Main";

export const Summary = ({ stepActive, previousStep } : { stepActive: number, previousStep: Function }) => {
    return <Main stepActive={stepActive}>Summary</Main>
}
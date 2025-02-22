import { MainForm } from "../layout/MainForm";

export const AddOns = ({ stepActive, previousStep, nextStep } : { stepActive: number, previousStep: Function, nextStep: Function }) => {
    return <MainForm title=""
                description=""
                stepActive={stepActive}
                previousStep={previousStep}
                nextStep={() => nextStep()}
            >
        .
    </MainForm>
}
import { MainForm } from "../layout/MainForm";

export const Summary = ({ stepActive, previousStep } : { stepActive: number, previousStep: Function }) => {
    return <MainForm title=""
                description=""
                stepActive={stepActive}
                previousStep={previousStep}
                nextStep={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
            >
        .
    </MainForm>
}
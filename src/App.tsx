import './App.css'
import React, { useState } from "react";
import { Info } from './components/Info'
import { Plan } from './components/Plan';
import { AddOns } from './components/AddOns';
import { Summary } from './components/Summary';

const App = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const steps : Array<React.ReactNode> = [
        <Info stepActive={stepActive} nextStep={nexStep} />,
        <Plan stepActive={stepActive} previousStep={previousStep} nextStep={nexStep} />,
        <AddOns stepActive={stepActive} previousStep={previousStep} nextStep={nexStep} />,
        <Summary stepActive={stepActive} previousStep={previousStep} />
    ]

    function previousStep () : void {
        setStepActive(stepActive === 0  ? stepActive : stepActive - 1)
    }

    function nexStep () : void {
        setStepActive(stepActive === steps.length - 1 ? stepActive : stepActive + 1)
    }

    return steps[stepActive];
}

export default App

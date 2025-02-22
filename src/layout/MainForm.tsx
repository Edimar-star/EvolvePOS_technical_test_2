import { FormEventHandler } from "react"
import { Main } from "./Main"

type MainFormProps = {
    title: string
    description: string
    children: React.ReactNode
    stepActive: number
    previousStep?: Function
    nextStep: FormEventHandler<HTMLFormElement>
}

export const MainForm = ({ title, description, children, stepActive, previousStep, nextStep } : MainFormProps) => {

    return <Main stepActive={stepActive}>
        <form className="h-full grid grid-rows-7" onSubmit={nextStep}>
                    
            <div className="row-span-6 flex flex-col gap-7 py-2">
                <div className="flex flex-col gap-1">
                    <h1 className="font-Ubuntu font-bold text-navy-blue text-3xl">{title}</h1>
                    <p className="font-Ubuntu font-normal tracking-tighter text-paragraph text-cold-gray">{description}</p>
                </div>
                
                {children}
            </div>
            
            <div className="flex row-span-1">
                {previousStep && <button className="font-Ubuntu font-bold self-end text-start hover:cursor-pointer hover:text-navy-blue w-[120px] h-[40px] bg-transparent text-cold-gray" type="button" onClick={() => previousStep()} >Go Back</button>}
                <button className="font-Ubuntu font-regular hover:brightness-150 self-end hover:cursor-pointer border-navy-blue w-[120px] h-[40px] rounded-lg ml-auto bg-navy-blue text-white" type="submit">Next Step</button>
            </div>
        
        </form>
    </Main>
}
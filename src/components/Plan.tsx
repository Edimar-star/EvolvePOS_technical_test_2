import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { optionsPlan } from "../router/data";
import { DataOptionPlan } from "../router/types";
import { useState } from "react";
import { MainForm } from "../layout/MainForm";

type IPlanForm = {
    optionPlan: DataOptionPlan
}

export const Plan = ({ stepActive, previousStep, nextStep } : { stepActive: number, previousStep: Function, nextStep: Function }) => {
    const [optionPeriodSelected, setOptionPeriodSelected] = useState<"monthly" | "yearly">("monthly")
    const {
        handleSubmit,
        setValue,
        control
    } = useForm<IPlanForm>({
        defaultValues: {
            optionPlan: optionsPlan.monthly.data[0]
        }
    });

    const changeOptionPeriod = () => {
        const newOptionPeriodSelected= optionPeriodSelected === "yearly" ? "monthly" : "yearly"
        setOptionPeriodSelected(newOptionPeriodSelected)
        setValue("optionPlan", optionsPlan[newOptionPeriodSelected].data[0])
    }

    const onSubmit: SubmitHandler<IPlanForm> = (data: IPlanForm) => {
        console.log(data)
        nextStep()
    }
    
    return <MainForm title="Select your plan"
                description="You have the option of monthly or yearly billing." 
                stepActive={stepActive}
                previousStep={previousStep}
                nextStep={handleSubmit(onSubmit)}
            >

        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 overflow-x-auto">
                    
                <Controller 
                    name="optionPlan"
                    control={control}
                    render={({ field }) => <>
                        {optionsPlan[optionPeriodSelected].data.map((option, index) => 
                            <fieldset className={`
                                    flex flex-col justify-between p-4 border-1 border-light-gray rounded-lg 
                                    hover:cursor-pointer hover:bg-pastel-blue gap-8
                                    ${field.value.name === option.name 
                                        ? "border-purplish-blue bg-alabaster" 
                                        : ""}
                                `} 
                                key={index} 
                                onClick={() => {
                                    field.onChange(option)
                                }}>
                                <div className={`${option.image} w-[40px] h-[40px] bg-cover bg-center bg-no-repeat rounded-full`}></div>
                                <div className="flex flex-col">
                                    <h4 className="font-Ubuntu font-bold text-lg text-navy-blue">{option.name}</h4>
                                    <span className="font-Ubuntu font-normal text-paragraph text-cold-gray">${option.price}{optionsPlan[optionPeriodSelected].suffix}</span>
                                    {option.monthsFree && <p className="font-Ubuntu font-normal text-[14px] text-navy-blue">{option.monthsFree} months free</p>}
                                </div>
                            </fieldset>
                        )}
                    </>}
                />

            </div>

            <div className="bg-alabaster w-full flex flex-row justify-center gap-5 rounded-lg p-3">
                <h4 className={`font-Ubuntu font-bold text-paragraph
                                ${optionPeriodSelected === "monthly" 
                                    ? "text-navy-blue"
                                    : "text-cold-gray"}`}>Monthly</h4>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={optionPeriodSelected === "yearly"}
                        onChange={() => changeOptionPeriod()}
                    />
                    <div className="w-12 h-6 bg-navy-blue rounded-full relative">
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all ${optionPeriodSelected === "yearly" ? "translate-x-6" : ""}`}></div>
                    </div>
                </label>

                <h4 className={`font-Ubuntu font-bold text-paragraph
                                ${optionPeriodSelected === "yearly" 
                                    ? "text-navy-blue"
                                    : "text-cold-gray"}`}>Yearly</h4>
            </div>
        </>

    </MainForm>
}
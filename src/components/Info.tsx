import { useForm, SubmitHandler } from "react-hook-form";
import { Main } from "../layout/Main";
import { InputsInfo } from '../router/types'
import { fieldsInfo } from '../router/data'
import { StepsBottons } from "./common/StepsBottons";

export const Info = ({ stepActive, nextStep } : { stepActive: number, nextStep: Function }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsInfo>();

    const onSubmit: SubmitHandler<InputsInfo> = (data: InputsInfo) => {
        console.log(data)
        nextStep()
    }

    return <Main stepActive={stepActive}>
        <form className="h-full grid grid-rows-7" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="row-span-6 flex flex-col gap-7 py-2">
                <div className="flex flex-col gap-1">
                    <h1 className="font-Ubuntu font-bold text-navy-blue text-3xl">Personal info</h1>
                    <p className="font-Ubuntu font-normal tracking-tighter text-paragraph text-cold-gray">Please provide your name, email address, and phone number.</p>
                </div>
                
                <div className="flex flex-col gap-4 overflow-x-auto">

                    {fieldsInfo.map((field, index) => 
                        <fieldset key={index} className="flex flex-col gap-2">
                            <label className="flex justify-between font-Ubuntu" htmlFor={field.id}>
                                <span className="font-Ubuntu font-bold text-paragraph text-navy-blue">{field.name}</span>
                                {errors[field.id] && <p className="font-Ubuntu font-bold text-strawberry-red text-paragraph">{errors[field.id]?.message}</p>}
                            </label>
                            <input className={`font-Ubuntu font-bold text-paragraph text-cold-gray border-1 border-cold-gray py-2 px-3 rounded-lg outline-none transition-all
                                            ${errors[field.id]?.message 
                                                ? "border-strawberry-red focus:border-strawberry-red focus:ring-1 focus:ring-strawberry-red" 
                                                : "focus:border-navy-blue focus:ring-1 focus:ring-navy-blue"}`}  
                                    id={field.id} placeholder={field.placeholder} type={field.type}
                                    {...register(field.id, field.validations)} />
                        </fieldset>
                    )}

                </div>
            </div>
            
            <StepsBottons nextStep={nextStep} />
        
        </form>
    </Main>
}
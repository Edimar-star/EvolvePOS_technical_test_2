import { useForm, SubmitHandler } from "react-hook-form";
import { InputsInfo } from '../router/types'
import { fieldsInfo } from '../router/data'
import { MainForm } from "../layout/MainForm";
import { useDataStore } from "../store/useDataStore";

export const Info = ({ stepActive, nextStep } : { stepActive: number, nextStep: Function }) => {
    const { createUser } = useDataStore()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsInfo>();

    const onSubmit: SubmitHandler<InputsInfo> = (data: InputsInfo) => {
        createUser(data)
        nextStep()
    }

    return <MainForm title="Personal info" 
                description="Please provide your name, email address, and your phone number." 
                stepActive={stepActive}
                nextStep={handleSubmit(onSubmit)}
            >
        
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
    
    </MainForm>
}
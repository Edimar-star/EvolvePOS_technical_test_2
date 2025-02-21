export const StepsBottons = 
    ({ previousStep, nextStep } : 
    { previousStep?: Function, nextStep?: Function }) => {
    
    return <div className={`flex row-span-1`}>
        {previousStep && <button className="font-Ubuntu font-bold self-end text-start hover:cursor-pointer hover:text-navy-blue w-[120px] h-[40px] bg-transparent text-cold-gray" type="button" onClick={() => previousStep()} >Go Back</button>}
        {nextStep && <button className="font-Ubuntu font-regular hover:brightness-150 self-end hover:cursor-pointer border-navy-blue w-[120px] h-[40px] rounded-lg ml-auto bg-navy-blue text-white" type="submit">Next Step</button>}
    </div>
}
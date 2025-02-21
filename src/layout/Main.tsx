export const Main = ({ children, stepActive } : { children: React.ReactNode, stepActive: number }) => {
    const steps: string[] = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]
    
    return <div className="bg-alabaster w-full h-[100vh] flex items-center justify-center">

        <main className="sm:min-h-[550px] bg-magnolia h-7/10 w-[90vw] shadow-3xl flex items-center justify-center">

            <section className="sm:min-w-[550px] sm:min-h-[500px] bg-white h-6/8 w-[855px] shadow-3xl rounded-xl p-4 gap-2 flex flex-row">

                <aside className="w-[250px] bg-sidebar-desktop bg-cover bg-center bg-no-repeat rounded-lg">
                    <ul className="flex flex-col px-8 py-10 w-full gap-8">
                        {steps.map((step, index)=> <li className="flex flex-row gap-4 items-center" key={index}>
                            <div className={`
                                    ${index === stepActive 
                                        ? "bg-light-blue font-bold text-navy-blue border-none" 
                                        : "bg-transparent text-white border-1 border-solid border-white"}
                                    w-[30px] h-[30px] text-center text-xs content-center rounded-full
                                    font-Ubuntu font-bold
                                `}>
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-Ubuntu font-regular text-xs text-cold-gray">STEP {index + 1}</h4>
                                <h3 className="font-Ubuntu font-bold text-xs tracking-wider text-white">{step}</h3>
                            </div>
                        </li>)}
                    </ul>
                </aside>

                <article className="w-auto h-full flex-1 px-[78px] pt-7 pb-4">
                    {children}
                </article>

            </section>

        </main>

    </div>
}
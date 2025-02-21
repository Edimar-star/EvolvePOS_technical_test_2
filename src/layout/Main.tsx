export const Main = ({ children, stepActive } : { children: React.ReactNode, stepActive: number }) => {
    const steps: string[] = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]
    
    return <div className="bg-alabaster w-full h-[100vh] flex items-center justify-center">

        <main className="sm:min-h-[500px] bg-magnolia h-6/8 w-[90vw] shadow-3xl flex items-center justify-center">

            <section className="sm:min-w-[550px] sm:min-h-[400px] bg-white h-6/8 w-4/6 shadow-3xl rounded-xl p-3 gap-3 flex flex-row">

                <aside className="w-[274px] bg-sidebar-desktop bg-cover bg-center bg-no-repeat rounded-lg">
                    <ul className="flex flex-col p-5 w-full gap-5">
                        {steps.map((step, index)=> <li className="flex flex-row gap-3 items-center" key={index}>
                            <div className={`
                                    ${index === stepActive 
                                        ? "bg-light-blue font-bold text-navy-blue border-none" 
                                        : "bg-transparent text-white border-2 border-solid border-white"}
                                    w-[40px] h-[40px] text-center content-center rounded-full
                                `}>
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-Ubuntu text-paragraph font-normal text-cold-gray">STEP {index + 1}</h4>
                                <h3 className="font-Ubuntu text-paragraph font-bold text-white">{step}</h3>
                            </div>
                        </li>)}
                    </ul>
                </aside>

                <article className="w-auto h-full flex-1 grid grid-rows-5 px-[80px] py-6">
                    {children}
                </article>

            </section>

        </main>

    </div>
}
import "./infocard.css"
function InfoCard({title , info , sign}){
    return(
        <>
        <div className="row-span-1 bg-white flex md:flex-col flex-rows card md:items-start items-center ">
            <h1 className="text-lg ">{title}</h1>
            <p className="text-white md:text-3xl text-xl self-center md:mt-[10px] percent md:pb-0 pb-4">{info}<span className="text-base">{sign}</span></p>
        </div>
        </>
    )
}

export default InfoCard
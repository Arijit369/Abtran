

function Itemicons({Icon , title}) {
    return (
        <div className="group  flex flex-col items-center cursor-pointer w-14 sm:w-20 hover:text-white">
            <Icon className="h-7 p-1  group-hover:animate-bounce"/>
           
        </div>
    )
}

export default Itemicons

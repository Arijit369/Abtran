

function Headeritem({Icon , title}) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-14 sm:w-20 hover:text-white">
            <Icon className="h-9  mt-2  group-hover:animate-bounce"/>
            <p className="opacity-100 group-hover:opacity-100 tracking-widest font-serif text-sm ">{title}</p>
        </div>
    )
}

export default Headeritem

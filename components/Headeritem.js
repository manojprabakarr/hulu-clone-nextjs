function Headeritem({title,Icon}) {
    return (
        <div className="flex flex-col items-center  w-12 sm:w-20 hover:text-white group">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className=" opacity-0 group-hover:opacity-100 font-medium">{title}</p>

            
        </div>
    )
}

export default Headeritem

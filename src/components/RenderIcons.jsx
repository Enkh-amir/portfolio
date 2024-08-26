export const RenderIcons = ({icon, text}) =>{
    return (
        <div className="w-[auto] h-[100%] flex gap-2 flex-col justify-center dark:text-[#D1D5DB] items-center ">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )
}
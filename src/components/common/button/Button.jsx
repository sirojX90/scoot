export const Button = ({children}) => {
  return (
    <button 
        className="
            border-2 
            border-yellow 
            text-white 
            text-[15px] 
            font-bold 
            font-[SpaceMono]
            bg-yellow 
            py-[14px] 
            px-[39px] 
            hover:text-yellow 
            hover:bg-transparent
        ">
            {children}
        </button>
  )
}

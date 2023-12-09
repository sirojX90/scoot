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
            py-[15px] 
            px-[40px] 
            hover:text-yellow 
            hover:bg-transparent
        ">
            {children}
        </button>
  )
}

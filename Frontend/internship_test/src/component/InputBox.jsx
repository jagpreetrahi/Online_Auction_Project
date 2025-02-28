export const InputBox = ({placeholder,  onchange ,label}) => {
   return <div>
        <div class='flex text-sm fw-medium pb-3 pt-3 text-xl' style={{letterSpacing : "1px"}}>
           {label}
        </div>
        <input  placeholder={placeholder} onChange={onchange} className='w-full px-2 py-1  rounded border border-secondary-subtle' style={{letterSpacing : "1px"}} required/>
   </div>
}
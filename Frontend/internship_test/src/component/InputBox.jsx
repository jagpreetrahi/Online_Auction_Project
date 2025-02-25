export const InputBox = ({placehoder,  onchange ,label}) => {
   return <div>
        <div class='flex text-sm fw-medium pb-3 pt-3 text-xl'>
           {label}
        </div>
        <input  placeholder={placehoder} onChange={onchange} class='w-full px-2 py-1  rounded border border-secondary-subtle' />
   </div>
}
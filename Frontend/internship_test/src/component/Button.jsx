export const Button = ({label , onClick}) => {
    return <button onClick={onClick} class=' focus-ring px-2 py-1  text-white fw-medium border rounded  mb-3' style={{letterSpacing : "2px" , background : '#89CFF0'}}>{label}</button>
  
}
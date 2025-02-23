export const Button = ({label , onClick}) => {
    return <button onClick={onClick} class='focus-ring px-4 py-2 bg-primary text-white fw-medium border rounded  mb-3' style={{letterSpacing : "2px"}}>{label}</button>
  
}
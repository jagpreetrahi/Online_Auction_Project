import {Link} from 'react-router-dom'
export const BottomWarning = ({label , buttonText , to}) => {
    return <div class='d-flex text-sm justify-content-center'>
        <div>
            {label}
        </div>
        <Link to={to} class='pl-2 pe-auto px-2'>
          {buttonText}
        </Link>

    </div>
}
import React from 'react'
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}
const Button:React.FC<ButtonProps> = (props) => {
    const { children,...rest } = props
    return ( 
        <button {...rest} className={"bg-teal-400 rounded-lg w-32 py-2 hover:shadow-sm hover:shadow-white transition-all active:scale-95 " + props.className}>{children}</button>
     );
}
 
export default Button;
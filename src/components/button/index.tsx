interface Props{
    text:string
    classes?:string
}
const Button = ({text,classes=''}:Props) => {
    return ( 
        <button className={"bg-teal-400 rounded-lg w-32 py-2 hover:shadow-sm hover:shadow-white transition-all active:scale-95 " + classes}>{text}</button>
     );
}
 
export default Button;
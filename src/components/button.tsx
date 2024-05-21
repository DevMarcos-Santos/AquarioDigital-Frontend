
interface Props{
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    type?: string;
    className?: string;
    disabled?: boolean;
}
export default function Button(props: Props){
    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled} className={props.className + " bg-black font-semibold text-white p-2 w-80 rounded-lg"}>{props.children}</button>
        </div>
    )
}
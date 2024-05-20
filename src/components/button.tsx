
interface Props{
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    type?: string;
}
export default function Button(props: Props){
    return (
        <div>
            <button onClick={props.onClick} className="bg-black font-semibold text-white p-2 w-80 rounded-lg">{props.children}</button>
        </div>
    )
}
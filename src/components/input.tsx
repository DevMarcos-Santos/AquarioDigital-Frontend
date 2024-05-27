

interface Props{
    Children?: React.ReactNode;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props){
    return (
        <div className="flex flex-col">
            <label className="">{props.Children}</label>
            <input type={props.type} onChange={props.onChange} value={props.value} className="bg-gray-100 w-80 h-10 rounded-lg border-2 border-gray-200 pl-2"/>
        </div>
    )
}
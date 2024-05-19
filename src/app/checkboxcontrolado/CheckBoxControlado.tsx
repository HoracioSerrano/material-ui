import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";

export default function CheckBoxControlado(props:{name:string, label:string, disabled?:boolean, checked:boolean, setChecked:(valor:boolean)=>void}){
    function manejaCambio(e:React.ChangeEvent<HTMLInputElement>){
        props.setChecked(e.target.checked);
    }

    return <FormControlLabel
                control={<Checkbox name={props.name} checked={props.checked} onChange={manejaCambio}/>} 
                label={props.label} 
                disabled={props.disabled==true?true:false}
            />
}

'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectControlado(props: {
        disabled?:boolean,
        required?:boolean,
        readonly?:boolean,
        error?:boolean,
        size?:"medium"|"small", 
        name:string, 
        etiqueta:string, 
        valor: string, 
        setValor: (arg0: string) => void, 
        opciones:{ opcion: string; valor: string; }[]
    }) 
{
    const labelId="labelId-"+props.name.replace(" ","-")+props.etiqueta.replace(" ","-");
    const id="id-" + props.name.replace(" ","-");
    const handleChange = (event: SelectChangeEvent) => {
        props.setValor(event.target.value as string);
    };
    
    const generarOpciones = ()=>{
        let array = props.opciones.map((x)=>{return <MenuItem key={id+"-"+x.valor.replace(" ","-")} value={x.valor}>{x.opcion}</MenuItem>})
        array.unshift(<MenuItem key={id+"labelId"+"-noneNingunaNada"} value={''}><em>Ninguna</em></MenuItem>)
        return array
    }
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl 
                fullWidth 
                size={props.size!==undefined? props.size:"medium"} 
                disabled={props.disabled==true?true:false} 
                required={props.required==true?true:false}
                error={props.error==true?true:false}
            >
                <InputLabel id={labelId}>{props.etiqueta}</InputLabel>
                <Select
                    labelId={labelId}
                    id={id}
                    value={props.valor}
                    label={props.etiqueta}
                    onChange={handleChange}
                    name={props.name}
                    inputProps={{ readOnly: props.readonly==true?true:false }}
                >
                    {generarOpciones()}
                </Select>
            </FormControl>
        </Box>
    );
}
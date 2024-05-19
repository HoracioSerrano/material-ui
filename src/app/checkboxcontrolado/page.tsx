'use client'
import { Container, Grid, TextField } from "@mui/material";
import CheckBoxControlado from "./CheckBoxControlado";
import { useState } from "react";

export default function pagina(){
    const [valor, setValor] = useState(false);

    const onChange = (valor:boolean)=>{
        setValor(valor);
        console.log(valor);
    }

    return (<>
        
            <Grid container columnSpacing={2} rowSpacing={6} columns={5} width={"50vw"}>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero uno" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado disabled label="Etiquea numero dos" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero tres" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={2}>
                    <CheckBoxControlado label="Etiquea numero cuatrocuatro cuatro cuatrocuatro cuatro cuatrocuatro cuatro" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero cinco" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero seis" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero siete" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero ocho" checked={valor} setChecked={setValor}/>
                </Grid>
                <Grid item xs={1}>
                    <CheckBoxControlado label="Etiquea numero nueve" checked={valor} setChecked={setValor}/>
                </Grid>
            </Grid>
                     

        {valor}  
        </> 
    )
}
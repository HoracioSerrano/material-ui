'use client'
import { Container, Grid, TextField } from "@mui/material";
import SelectControlado from "./SelectControlado";
import { useState } from "react";

export default function pagina(){
    const [valor, setValor] = useState("");
    const valores = [
        {opcion:"Argentina",valor:"1"},{opcion:"Paraguay",valor:"2"},{opcion:"Chile",valor:"3"},{opcion:"Bolivia",valor:"4"},
        {opcion:"Pais Laaaaaaaaaaaaarrrrrgoooo",valor:"5"}
    ];

    const onChange = (valor:string)=>{
        setValor(valor);
        console.log(valor);
    }

    return (<>
        
            <Grid container columnSpacing={2} rowSpacing={6} columns={4} width={"50vw"}>
                <Grid item xs={1}>
                    <SelectControlado required size="small" name="Pais" etiqueta="Pais Origen" valor={valor} setValor={setValor} opciones={valores}/>
                </Grid>
                <Grid item xs={1}>
                    <SelectControlado readonly size="small" name="Pais2" etiqueta="Pais Origen" valor={valor} setValor={setValor} opciones={valores}/>
                </Grid>
                <Grid item xs={1}>
                    <SelectControlado disabled size="small" name="Pais3" etiqueta="Pais Origen" valor={valor} setValor={setValor} opciones={valores}/>
                </Grid>
                <Grid item xs={1}>
                    <SelectControlado error size="small" name="Pais4" etiqueta="Pais Origen" valor={valor} setValor={onChange} opciones={valores}/>
                </Grid>
            </Grid>
                     

        {valor}  
        </> 
    )
}
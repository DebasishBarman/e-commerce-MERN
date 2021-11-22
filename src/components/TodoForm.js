import React,{useState,useRef} from 'react'
import { Grid, TextField, Typography, Button, Paper } from '@mui/material'
import TodoCard from './TodoCard';
const TodoForm = () => {
    const [items,setItems]=useState();
    const [itmArr,setItmArr]=useState([])

    const itemEvent=(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setItems(value)
    }
    // const itm=useRef()
    const saveItem=()=>{
// console.log(itm);

        setItmArr((old)=>{
            return [...old,items]
        })

        setItems("");
     }

    return (
        <>
            <Typography variant="h6" component="p">To do list</Typography>
            <Paper elevation={3}>
                <Grid container alignItems="center" justifyContent="center">

                    <Grid item>
                        <TextField  onChange={itemEvent} value={items} variant="outlined" size="small" placeholder="Add a item" />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={saveItem}>Add</Button>
                    </Grid>

                </Grid>
                <div>
                    <ol>
                        {
                            itmArr.map((e)=>{
                                return <TodoCard text={e}/>
                            })
                        }
                        
                    </ol>
                </div>

            </Paper>
        </>

    )
}

export default TodoForm

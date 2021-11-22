import React, { useState, useEffect } from 'react'
import { Grid, TextField, Typography, Button, Paper } from '@mui/material'
const TodoCard = (props) => {
    return (
        <>
            <Grid container>
                <Paper elevation={2}>
                    <li>{props.text}</li>
                </Paper>

            </Grid>
        </>
    )
}

export default TodoCard

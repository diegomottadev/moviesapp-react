import React,{useState}  from 'react';
import {Container, Typography, TextField, Grid,Card, Button} from '@material-ui/core';
import style from './styles';
import {MovieIcon} from '../../icons';


export default  ()=>{
    const [searchText, setSearchText] = useState("");
    const classes = style();
    const handleSearchTextChange = event=>{
        setSearchText(event.target.value);
    };

    const handleClickCleanText = () =>{

    };

    const handleSearchTextClick = () =>{

    };

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}></MovieIcon>
                    </Grid>
                </Grid>
                <TextField className={classes.textFieldSearch} value={searchText} placeholder="Buscar..." onChange={handleSearchTextChange}></TextField>
                <Grid className={classes.buttonContainer}>
                    <Button variant="contained" onClick={handleClickCleanText}>Buscar</Button>
                    <Button className={classes.searchButton} variant="contained" color="primary" onClick={handleSearchTextClick}>Limpiar</Button>
                </Grid>
            </Card>
        </Container >
    )
}
    
    
import { makeStyles } from '@material-ui/core'

const centeredStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        ...centeredStyle,
        flexDirection: 'column'
    },
    cardContainer: {
        flexDirection: 'column',
        width:400,
        height:200,
        padding:'2e3m',
        ...centeredStyle,
    },
    title:{
        fontSize: '4rem'
    },
    titleGridContainer:{
        ...centeredStyle,
    },
    textFieldSearch:{
        width: '90%'
    },

    searchButton:{
        marginLeft: '.5rem'
    },

    buttonContainer:{
        marginTop: '.5rem'
    },

    movieIcon:{
        fontSize: '4rem'
    }

});
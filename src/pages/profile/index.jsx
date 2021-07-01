import {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {theme} from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
    profilePage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        height: '50%',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: `0 0 20px ${theme.palette.primary.main}`
    },
    userIcon: {
        border: `0.3rem solid ${theme.palette.primary.main}`,
        borderRadius: '100%',
        width: 'fit-content',
        height: 'fit-content',
    },
    profileRow: {
        textAlign: 'left',
        width: '100%'
    },
    nameInput: {
        marginRight: '1rem'
    },
    emailInput: {
        width: '100%',
    }
}));

const Index = () => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const submit = event => {
        event.preventDefault();
    };

    return (
        <div className={classes.profilePage} >
            <form className={classes.profileContainer} onSubmit={submit}>
                <div className={classes.userIcon}>
                    <PermIdentityIcon style={{color: theme.palette.primary.main, width: '6rem', height: '6rem'}}/>
                </div>

                <div className={classes.profileRow}>
                    <TextField
                        className={classes.nameInput}
                        required
                        id="outlined-required"
                        label="نام"
                        defaultValue="Hello World"
                        variant="outlined"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="نام خانوادگی"
                        defaultValue="Hello World"
                        variant="outlined"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className={classes.profileRow}>
                    <TextField
                        className={classes.emailInput}
                        required
                        id="outlined-required"
                        label="ایمیل"
                        defaultValue="Hello World"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <Button variant="contained" color="primary" type='submit'>ثبت</Button>

            </form>
        </div>
    )
};

export default Index;
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useTaskModal} from "../../../services/context/taskModalContext/TaskModalContext";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    container: {
        backgroundColor: '#ddd',
        height: '100%',
    },
    list: {
        width: '100%',
        position: 'sticky',
        top: 0,
    },
    fullList: {
        width: 'auto',
    },
    homeLink: {
        color: 'inherit',
        textDecoration: 'none',
    }
});

const SideBar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [taskModalState, taskModalDispatch] = useTaskModal();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to={{
                    pathname: "/",
                }}
                className={classes.homeLink}>
                    <ListItem button>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='خانه' />
                    </ListItem>
                </Link>

                <ListItem button onClick={() => taskModalDispatch({type: 'SHOW', data: {canCreate: true}})}>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary='اضافه کردن تسک جدید' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary='خروج' />
                </ListItem>

            </List>
        </div>
    );

    return (
        <div className={classes.container}>
            {list('right')}
        </div>
    );
};

export default SideBar;
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../store/actions';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UserData from './UserData';
import UserEdit from './UserEdit';


const useStyles = makeStyles((theme) => ({
	root: {
		padding: 10,
	},
	container: {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(12, 1fr)',
	  gridGap: theme.spacing(3),
	},
	paper: {
	  padding: theme.spacing(1),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	  whiteSpace: 'nowrap',
	  marginBottom: theme.spacing(1),
	  display: 'flex',
	  flexWrap: 'wrap',
	  marginBottom: '0 !important',
	},
	divider: {
	  margin: theme.spacing(2, 0),
	},
  }));

function UserContent(props) {
	const dispatch = useDispatch();
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, "")}>
			<div className="flex flex-1 w-full items-center justify-between">
				<div className="flex flex-col items-start max-w-full">

					<div className="flex items-center max-w-full">
						<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
								<Typography className="text-16 sm:text-20 truncate">
									Usuários
								</Typography>
							</FuseAnimate>
							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
								<Typography variant="caption">Visualizar</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>
			</div>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<UserData user={props.user}/>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper} className="h-full">
						<UserEdit user={props.user}/>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default withRouter(UserContent);

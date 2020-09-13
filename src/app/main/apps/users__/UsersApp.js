import FuseAnimate from '../user/product/node_modules/@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from '../user/product/node_modules/app/store/withReducer';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ContactDialog from './UserDialog';
import ContactsHeader from './UsersHeader';
import ContactsList from './UsersList';
import * as Actions from './store/actions';
import reducer from './store/reducers';

const useStyles = makeStyles({
	addButton: {
		position: 'absolute',
		right: 12,
		bottom: 12,
		zIndex: 99
	}
});

function UsersApp(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);
	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(Actions.getContacts(props.match.params));
		dispatch(Actions.getUserData());
	}, [dispatch, props.match.params]);

	useEffect(() => {
		dispatch(Actions.getContacts(props.match.params));
	}, [dispatch, props.match.params]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 pb-80 sm:pb-80 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				// header={<ContactsHeader pageLayout={pageLayout} />}
				content={<ContactsList />}
				// leftSidebarContent={<ContactsSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			<FuseAnimate animation="transition.expandIn" delay={300}>
				<Fab
					color="primary"
					aria-label="add"
					className={classes.addButton}
					onClick={ev => dispatch(Actions.openNewContactDialog())}
				>
					<Icon>person_add</Icon>
				</Fab>
			</FuseAnimate>
			<ContactDialog />
		</>
	);
}

export default withReducer('usersApp', reducer)(UsersApp);
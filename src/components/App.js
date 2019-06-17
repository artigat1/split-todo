import React from 'react';
import { connect } from 'react-redux';
import { SplitFactory } from '@splitsoftware/splitio';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { setFlags } from '../actions';

const App = ({dispatch}) => {
    var factory = SplitFactory({
        core: {
            authorizationKey: 'hkkkjal754oua3dgcmfingn5i8g6stiufstq',
            key: 'user-1' // unique identifier for your user
        }
    });

    var client = factory.client();

    client.on(client.Event.SDK_READY, function() {
        const treatment = client.getTreatment('footer-2');
        console.log('footer-2 feature is ', treatment);

        if (treatment === 'on') {
            dispatch(setFlags({footer2: true}));
        } else {
            dispatch(setFlags({footer2: false}));
        }
    });

    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    );
}

export default connect()(App);

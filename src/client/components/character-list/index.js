import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Character from 'component/character'

import actions, { characterDelete } from './actions'
import reducer from './reducer'

@connect(store => ({
    list : store.characterList.list
}))
class CharacterList extends Component {

    static displayName = '[component] character-list';

    static propTypes = {
        list : PropTypes.array.isRequired
    };

    render() {
        return(
            <div>
                <ul>
                    {this.props.list.map(({ name, password }, index) => {
                        const props = {
                            key : index,
                            index,
                            name,
                            password
                        };

                        return <Character {...props} />
                    })}
                </ul>
            </div>
        )
    }

}

export { CharacterList as default, actions, reducer }
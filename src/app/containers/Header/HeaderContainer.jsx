import React from 'react';
import styles from '../../../themes/components/header.scss';
import IconButton from '../../components/common/Icon/IconButton';
import moonIcon from '../../../../assets/icons/moon.svg';
import sunIcon from '../../../../assets/icons/sun.svg';
import {connect} from 'react-redux';

export class HeaderContainer extends React.PureComponent {
    render() {
        const {name} = this.props;
        return (
            <div className={styles.headerWrapper}>
                <h2>{name}</h2>
                <IconButton
                    icon={moonIcon}
                    color={'#172B4D'}
                    height='30px'
                    width='30px'
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let conversations = state.conversations.conversations;
    const currentConversation = conversations.find(conversation => conversation.id === state.conversations.currentConversationId);
    return {
        name: currentConversation && currentConversation.profile.name
    }
};

export default connect(mapStateToProps)(HeaderContainer)
import React from 'react';
import styles from '../../../themes/components/header.scss';
import {getTheme, setDarkTheme, setLightTheme} from '../../actions/settings/index.actions';
import IconButton from '../../components/common/Icon/IconButton';
import moonIcon from '../../../../assets/icons/moon.svg';
import sunIcon from '../../../../assets/icons/sun.svg';
import {connect} from 'react-redux';
import {lightTheme} from "../../config/theme.config";

export class HeaderContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
    }

    componentDidMount() {
        this.props.getTheme();
    }

    isLightTheme() {
        return this.props.theme === lightTheme;
    }

    handleChangeTheme() {
        if (this.isLightTheme()) {
            this.props.setDarkTheme();
        } else {
            this.props.setLightTheme();
        }
    }

    render() {
        const {name} = this.props;
        return (
            <div className={styles.headerWrapper}>
                <h2>{name}</h2>
                <div className={styles.themeSwitch}>
                    <IconButton
                        icon={this.isLightTheme() ? moonIcon : sunIcon}
                        onClick={this.handleChangeTheme}
                        color={this.isLightTheme() ? '#172B4D' : 'white'}
                        height='30px'
                        width='30px'
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let conversations = state.conversations.conversations;
    const currentConversation = conversations.find(conversation => conversation.id === state.conversations.currentConversationId);
    return {
        name: currentConversation && currentConversation.profile.name,
        theme: state.settings.theme
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTheme: () => dispatch(getTheme()),
        setLightTheme: () => dispatch(setLightTheme),
        setDarkTheme: () => dispatch(setDarkTheme),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
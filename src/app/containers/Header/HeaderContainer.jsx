import React from 'react';
import PropTypes from "prop-types";
import styles from '../../../themes/components/header.scss';
import {getTheme, setTheme} from '../../actions/settings/index.actions';
import {setColor} from '../../actions/conversations/index.actions';
import IconButton from '../../components/common/Icon/IconButton';
import moonIcon from '../../../../assets/icons/moon.svg';
import sunIcon from '../../../../assets/icons/sun.svg';
import {connect} from 'react-redux';
import {lightTheme, oppositeTheme} from "../../config/theme.config";
import ColorPicker from "../../components/common/ColorPicker";
import ColourIcon from "../../components/common/ColorPicker/ColorIcon";
import {conversationSelector} from "../../selectors/conversationSelector";
import {getThemeSelector} from "../../selectors/settingsSelector";
import {ConversationPropTypes} from "../../config/propTypes";

export class HeaderContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showColorPicker: false
        };
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
        this.showColorPicker = this.showColorPicker.bind(this);
        this.onChangeColorPicker = this.onChangeColorPicker.bind(this);
    }

    componentDidMount() {
        this.props.getTheme();
    }

    isLightTheme() {
        return this.props.theme === lightTheme;
    }

    handleChangeTheme() {
        const newTheme = oppositeTheme(this.props.theme);
        this.props.setTheme(newTheme);
    }

    showColorPicker() {
        this.setState({
            showColorPicker: !this.state.showColorPicker
        });
    }

    onChangeColorPicker(color) {
        this.setState({
            showColorPicker: false
        });
        this.props.setColor(color, this.props.currentConversation.id);
    }

    render() {
        const {profile, color} = this.props.currentConversation;
        return (
            <div className={styles.headerWrapper}>
                <h2>{(profile && profile.name) || ''}</h2>
                <div className={styles.headerThemeToggle}>
                    <IconButton
                        icon={this.isLightTheme() ? moonIcon : sunIcon}
                        onClick={this.handleChangeTheme}
                        color={this.isLightTheme() ? '#172B4D' : 'white'}
                        height='22px'
                        width='22px'
                    />
                </div>
                <div className={styles.headerColorPicker}>
                    <ColourIcon
                        color={color}
                        onClick={this.showColorPicker}
                    />
                </div>
                {this.state.showColorPicker && (
                    <ColorPicker
                        onChange={this.onChangeColorPicker}
                    />
                )}
            </div>
        )
    }
}

HeaderContainer.propTypes = {
    currentConversation: ConversationPropTypes,
    theme: PropTypes.string.isRequired,
    getTheme: PropTypes.func.isRequired,
    setTheme: PropTypes.func.isRequired,
    setColor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        ...conversationSelector(state),
        theme: getThemeSelector(state)
    }
};

export default connect(mapStateToProps, {getTheme, setTheme, setColor})(HeaderContainer)
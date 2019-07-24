import React from 'react';

export default class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({isHovered: true})
    };

    handleMouseLeave() {
        this.setState({isHovered: false})
    };

    render() {
        const {IconComponent, color, hoverColor, height, width} = this.props;
        const {isHovered} = this.state;
        return (
            <IconComponent
                fill={(isHovered && hoverColor) || color}
                height={height}
                width={width}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }
}

Icon.defaultProps = {
    height: '40px',
    width: '40px'
};
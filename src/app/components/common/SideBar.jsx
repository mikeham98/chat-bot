import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../themes/components/sideBar.scss';

const maxWidth = '300px';
const minWidth = '1px';

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.minSideBarWidth = minWidth;
        this.addTransition = this.addTransition.bind(this);
        this.removeTransition = this.removeTransition.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleBounce = this.handleBounce.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDownDraggableHandle = this.onMouseDownDraggableHandle.bind(this);
    }

    componentDidMount() {
        // Add a mouse down listener to the handle so that the menu can be resized on mouse move
        this.sideBarDraggableHandle.addEventListener("mousedown", this.onMouseDownDraggableHandle);

        // On mouse up (any where on the document) bounce the size bar and remove the mouse down event handler
        document.addEventListener("mouseup", this.onMouseUp);
    }

    componentWillUnmount() {
        // clean up event listeners
        this.sideBarDraggableHandle.removeEventListener("mousedown", this.onMouseDownDraggableHandle);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.handleResize);
        document.removeEventListener('selectstart', this.disableSelect);
    }

    onMouseUp() {
        this.handleBounce();
        document.removeEventListener("mousemove", this.handleResize);
        document.removeEventListener('selectstart', this.disableSelect);
    }

    onMouseDownDraggableHandle() {
        this.minSideBarWidth = this.sideBarWrapper.style.width;
        this.removeTransition();
        document.addEventListener("mousemove", this.handleResize);
        document.addEventListener('selectstart', this.disableSelect);
    }

    handleResize(event) {
        this.sideBarWrapper.style.width = `${event.x}px`;
    }

    disableSelect(event) {
        event.preventDefault();
    }

    handleBounce() {
        const sideBarWidth = this.sideBarWrapper.style.width;
        if (sideBarWidth !== maxWidth) {
            this.addTransition();
            if (sideBarWidth < maxWidth && sideBarWidth !== minWidth) {
                this.sideBarWrapper.style.width = minWidth;
                return;
            }
            this.sideBarWrapper.style.width = maxWidth;
        }
    }

    addTransition() {
        this.sideBarWrapper.style.transition = 'width 300ms';
    }

    removeTransition() {
        this.sideBarWrapper.style.transition = 'none';
    }

    render() {
        return (
            <div className={styles.sideBarContainer}>
                <div ref={ref => this.sideBarWrapper = ref} style={{width: 300}}>
                    <div className={styles.sideBarMenuWrapper}>
                        <div className={styles.sideBarMenu}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h1 className={styles.sideBarMenuTitle}>
                                    {this.props.title}
                                </h1>
                                <div className={styles.sideBarMenuChildren}>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div ref={(ref) => this.sideBarDraggableHandle = ref} className={styles.sideBarDraggableHandle}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SideBar.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
};
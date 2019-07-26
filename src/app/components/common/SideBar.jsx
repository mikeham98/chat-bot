import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../themes/components/sideBar.scss';

const maxWidth = 300;
const minWidth = 60;

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addTransition = this.addTransition.bind(this);
        this.removeTransition = this.removeTransition.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
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
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener('selectstart', this.disableSelect);
    }

    onMouseUp(event) {
        const sideBarWidth = parseInt(this.sideBarWrapper.style.width, 10);
        if (event.target === this.sideBarDraggableHandle && sideBarWidth >= minWidth) {
            this.handleBounce();
        }
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener('selectstart', this.disableSelect);
    }

    onMouseDownDraggableHandle() {
        this.removeTransition();
        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener('selectstart', this.disableSelect);
    }

    onMouseMove(event) {
        console.log('hi')
        this.sideBarMenuTitle.style.height = '150px';
        this.handleResize(event.x);
    }

    handleResize(newWidth) {
        if (newWidth >= minWidth) {
            this.sideBarWrapper.style.width = `${newWidth}px`;
        }
        if (newWidth < maxWidth) {
            this.sideBarMenuTitle.style.height = 0;
        }else {
            this.sideBarMenuTitle.style.height = '150px';
        }
    }

    disableSelect(event) {
        event.preventDefault();
    }

    handleBounce() {
        const sideBarWidth = parseInt(this.sideBarWrapper.style.width, 10);
        if (sideBarWidth !== maxWidth) {
            this.addTransition();
            if (sideBarWidth === minWidth) {
                this.handleResize(maxWidth);
            } else {
                if (sideBarWidth < maxWidth) {
                    this.handleResize(minWidth);
                } else {
                    this.handleResize(maxWidth);
                }
            }
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
                <div ref={ref => this.sideBarWrapper = ref} id='sideBarWrapper' style={{width: 300}}>
                    <div className={styles.sideBarMenuWrapper} id='sideBarMenuWrapper'>
                        <div className={styles.sideBarMenu}>
                            <div className={styles.sideBarContent}>
                                <div ref={ref => this.sideBarMenuTitle = ref} className={styles.sideBarMenuTitle}>
                                    <h1>
                                        {this.props.title}
                                    </h1>
                                </div>
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
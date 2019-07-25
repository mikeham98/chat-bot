import React from 'react';
import {Formik} from 'formik';
import MessageInput from './MessageInput';
import IconButton from "../../common/Icon/IconButton";
import sendIcon from '../../../../../assets/icons/right-arrow-1.svg';
import styles from '../../../../themes/components/toolbar.scss';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({message}, {setSubmitting, resetForm}) {
        const callback = () => {
            setSubmitting(false);
            resetForm()
        };
        this.props.sendMessage(message, callback);
    }

    validate(values) {
        let errors = {};
        if (!values.message) {
            errors.message = 'Required';
        }
        return errors;
    }

    render() {
        return (
            <Formik
                initialValues={this.props.initialValues}
                onSubmit={this.handleSubmit}
                validate={this.validate}
            >
                {formikProps => {
                    const {
                        values,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = formikProps;
                    return (
                        <form className={styles.messageFormWrapper} onSubmit={handleSubmit}>
                            <MessageInput
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <IconButton
                                type='submit'
                                icon={sendIcon}
                                style={{margin: '0 10px'}}
                                color={(values.message && values.message.length) ? '#172B4D' : '#939aab'}
                                height='30px'
                                width='30px'
                                disabled={isSubmitting}
                            />
                        </form>
                    );
                }}
            </Formik>
        )
    }
}

MessageForm.defaultProps = {
    initialValues: {
        message: ''
    }
};

export default MessageForm;
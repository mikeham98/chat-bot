import React from 'react';
import {Formik} from 'formik';
import MessageInput from './MessageInput';
import IconButton from "../../common/Icon/Button";
import sendLogo from '../../../../../assets/icons/right-arrow-1.svg';
import styles from '../../../../themes/toolbar.scss';

export default class MessageForm extends React.Component {
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

    render() {
        return (
            <Formik
                initialValues={this.props.initialValues}
                onSubmit={this.handleSubmit}
                // validationSchema={Yup.object().shape({
                //     email: Yup.string()
                //         .email()
                //         .required('Required'),
                // })}
            >
                {formikProps => {
                    const {
                        values,
                        touched,
                        errors,
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
                                touched={touched.message}
                                error={errors.message}
                            />
                            <IconButton
                                type='submit'
                                icon={sendLogo}
                                style={{margin: '0 10px'}}
                                color={values.message.length ? '#172B4D' : '#939aab'}
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
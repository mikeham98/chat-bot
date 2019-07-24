import React from 'react';
import {Formik} from 'formik';
import MessageInput from './MessageInput';

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
                        <form onSubmit={handleSubmit}>
                            <MessageInput
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                touched={touched.message}
                                error={errors.message}
                            />
                            <button type="submit" disabled={isSubmitting}>
                                SEND
                            </button>
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
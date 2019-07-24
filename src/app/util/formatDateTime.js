import moment from 'moment';

/*
    I have used moment for this application as it is has an easy API. For examples of me using JavaScripts
    native Date functionality please look at formatDateTime.test.js or react-awesome-calendar.
*/
const lastWeek = moment().subtract(6, 'days');
const currentYear = moment().get('year');

const formatDateTime = (dateTime) => {
    const momentDate = moment(dateTime);
    if(momentDate.get('year') < currentYear) {
        return momentDate.format('DD MMMM YYYY h:mm a');
    }
    if(momentDate.isBefore(lastWeek)) {
        return momentDate.format('DD MMMM h:mm a');
    }
    return momentDate.format('ddd h:mm a');
};

export default formatDateTime;
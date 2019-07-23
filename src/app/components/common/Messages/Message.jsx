import React from 'react';

const Message = ({body}) => {
    return (
        <div>
            {body}
        </div>
    );
};

export default React.memo(Message);
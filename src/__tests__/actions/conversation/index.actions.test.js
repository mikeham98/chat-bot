import messages from '../../../../json/messages';
import {constants, getConversationMessages} from '../../../app/actions/conversation/index.actions';

const mockDispatch = jest.fn();
const dispatch = (thunk) => thunk(mockDispatch);

describe('conversation actions', () => {
    describe('getConversationMessages', () => {
        it('should call dispatch with an action of type GET_CONVERSATION_MESSAGES and a payload of messages.json', () => {
            expect(mockDispatch).not.toHaveBeenCalled();

            dispatch(getConversationMessages());

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith({
                type: constants.GET_CONVERSATION_MESSAGES,
                payload: messages
            })
        })
    });
});
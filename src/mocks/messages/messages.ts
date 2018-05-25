import { PROFILE_LIST } from '../profiles/profiles';
import { Message } from '../../models/messages/message.interface';

const profileList = PROFILE_LIST;

const messageList: Message[] = [];

profileList.forEach(user => messageList.push({ user: user, date: new Date(), lastMessage: 'Kevin Islas es muy buen ingeniero' }));

export const MESSAGE_LIST = messageList;
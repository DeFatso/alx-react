import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.restoreAllMocks();
});

const messages = [
  {
    guid: "89",
    isRead: true,
    type: "urgent",
    value: "Odio pellentesque"
  }
];

const notifLength = messages.length;

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Notifications div', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} />);
    expect(wrapper.find('.Notifications_95aj9m').exists()).toEqual(true);
  });

  it('renders list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} />);
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  });

  it('renders the text: "Here is the list of notifications:"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} />);
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  });

  it('renders first NotificationItem element with the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} />);
    const firstChild = wrapper.find('ul').children().first();
    expect(firstChild.html()).toBe('<li class="urgent_1uqgzdq-o_O-listItem_1fp99j6" data-notification-type="urgent">Odio pellentesque</li>');
  });

  it('renders "No new notification for now" when there are no notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={[]} />);
    expect(wrapper.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  });

  it('calls showDrawer() when menuItem is clicked', () => {
    const showDrawer = jest.fn();
    const wrapper = shallow(<Notifications showDrawer={showDrawer} displayDrawer={false} />);
    const menuItem = wrapper.find('.menuItem_1ron99v');
    menuItem.simulate('click');
    expect(showDrawer).toHaveBeenCalled();
  });

  it('calls hideDrawer() when close-btn is clicked', () => {
    const hideDrawer = jest.fn();
    const wrapper = shallow(<Notifications hideDrawer={hideDrawer} displayDrawer={true} />);
    const closeButton = wrapper.find({ id: "close-btn" });
    closeButton.simulate('click');
    expect(hideDrawer).toHaveBeenCalled();
  });

  it('clicking on the first button should call setNotificationFilter with URGENT', () => {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} setNotificationFilter={setNotificationFilter} />);
    const urgentButton = wrapper.find('button').at(0);
    urgentButton.simulate('click');
    expect(setNotificationFilter).toHaveBeenCalledWith("URGENT");
  });

  it('clicking on the second button should call setNotificationFilter with DEFAULT', () => {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} setNotificationFilter={setNotificationFilter} />);
    const defaultButton = wrapper.find('button').at(1);
    defaultButton.simulate('click');
    expect(setNotificationFilter).toHaveBeenCalledWith("DEFAULT");
  });
});
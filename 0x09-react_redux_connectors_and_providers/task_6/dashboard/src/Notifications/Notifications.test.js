import React from 'react';
import { Notifications } from "./Notifications";
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

describe(`Notifications Component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} fetchNotifications={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Notifications div", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} fetchNotifications={() => {}} />);
    expect(wrapper.find('.Notifications_95aj9m').exists()).toEqual(true);
  });

  it("renders list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} fetchNotifications={() => {}} />);
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  });

  it("renders the text: 'Here is the list of notifications:'", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} fetchNotifications={() => {}} />);
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  });

  it("renders first NotificationItem element with the right html", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={messages} fetchNotifications={() => {}} />);
    const firstChild = wrapper.find('ul').children().first();
    expect(firstChild.html()).toBe('<li class="urgent_1uqgzdq-o_O-listItem_1fp99j6" data-notification-type="urgent">Odio pellentesque</li>');
  });

  it("renders 'No new notification for now' when there are no notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} messages={[]} fetchNotifications={() => {}} />);
    expect(wrapper.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  });

  it("calls handleDisplayDrawer() when menuItem is clicked", () => {
    const showDrawer = jest.fn();
    const wrapper = shallow(<Notifications showDrawer={showDrawer} displayDrawer={false} fetchNotifications={() => {}} />);
    const menuItem = wrapper.find('.menuItem_1ron99v');
    menuItem.simulate('click');
    expect(showDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer() when close-btn is clicked", () => {
    const hideDrawer = jest.fn();
    const wrapper = shallow(<Notifications hideDrawer={hideDrawer} displayDrawer={true} fetchNotifications={() => {}} />);
    const closeButton = wrapper.find({ id: "close-btn" });
    closeButton.simulate('click');
    expect(hideDrawer).toHaveBeenCalled();
  });
});
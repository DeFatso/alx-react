import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Other existing tests...

  it('does not rerender with the same list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldUpdateSpy).toHaveBeenCalledTimes(1);
    shouldUpdateSpy.mockRestore();
  });

  it('rerenders with a longer list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
    ];
    const newNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: newNotifications });
    expect(shouldUpdateSpy).toHaveBeenCalledTimes(1);
    shouldUpdateSpy.mockRestore();
  });
});
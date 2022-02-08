require('../src/index');
const { getNotificationMessage } = window.pomodoro;

describe('#getNotificationMessage', () => {
  it('returns "Take a break!" when it is break time', () => {
    expect(getNotificationMessage(true)).toBe('Take a break!');
  });
  it('returns "Keep working!" when it is work time', () => {
    expect(getNotificationMessage(false)).toBe('Keep working!');
  })
})

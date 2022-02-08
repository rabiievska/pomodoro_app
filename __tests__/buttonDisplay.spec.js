require('../src/index');
const { buttonDisplay } = window.pomodoro;

describe('#buttonDisplay', () => {
  it('should display the correct button text', () => {
    expect(buttonDisplay(true, 0)).toBe('START');
    expect(buttonDisplay(true, 1)).toBe('Continue');
    expect(buttonDisplay(false, 0)).toBe('Pause');
  })
})

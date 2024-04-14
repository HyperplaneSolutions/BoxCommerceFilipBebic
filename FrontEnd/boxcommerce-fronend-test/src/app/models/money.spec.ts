import { FullAmount } from './full-amount';

describe('FullAmount', () => {
  it('should create an instance', () => {
    expect(new FullAmount(0,'EUR')).toBeTruthy();
  });
});

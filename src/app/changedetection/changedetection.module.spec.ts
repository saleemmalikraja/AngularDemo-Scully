import { ChangedetectionModule } from './changedetection.module';

describe('ChangedetectionModule', () => {
  let changedetectionModule: ChangedetectionModule;

  beforeEach(() => {
    changedetectionModule = new ChangedetectionModule();
  });

  it('should create an instance', () => {
    expect(changedetectionModule).toBeTruthy();
  });
});

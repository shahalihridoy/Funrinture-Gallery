import { NgxModule } from './ngx.module';

describe('NgxBootstrapModuleModule', () => {
  let ngxBootstrapModuleModule: NgxModule;

  beforeEach(() => {
    ngxBootstrapModuleModule = new NgxModule();
  });

  it('should create an instance', () => {
    expect(ngxBootstrapModuleModule).toBeTruthy();
  });
});

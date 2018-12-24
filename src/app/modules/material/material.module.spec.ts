import { MaterialModule } from './material.module';

describe('AngularMaterialModuleModule', () => {
  let angularMaterialModuleModule: MaterialModule;

  beforeEach(() => {
    angularMaterialModuleModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialModuleModule).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { ComponentSharedModule } from './component-shared.module';

describe('ComponentSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentSharedModule).toBeDefined();
  });
});

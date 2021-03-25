import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDirectiveExampleComponent } from './switch-directive-example.component';

describe('SwitchDirectiveExampleComponent', () => {
  let component: SwitchDirectiveExampleComponent;
  let fixture: ComponentFixture<SwitchDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDirectiveExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

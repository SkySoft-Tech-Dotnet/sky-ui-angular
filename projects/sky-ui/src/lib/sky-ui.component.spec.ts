import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyUiComponent } from './sky-ui.component';

describe('SkyUiComponent', () => {
  let component: SkyUiComponent;
  let fixture: ComponentFixture<SkyUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

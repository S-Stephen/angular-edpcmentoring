import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteePreferencesComponent } from './mentee-preferences.component';

describe('MenteePreferencesComponent', () => {
  let component: MenteePreferencesComponent;
  let fixture: ComponentFixture<MenteePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

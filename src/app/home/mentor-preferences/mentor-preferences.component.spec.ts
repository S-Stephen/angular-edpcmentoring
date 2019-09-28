import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorPreferencesComponent } from './mentor-preferences.component';

describe('MentorPreferencesComponent', () => {
  let component: MentorPreferencesComponent;
  let fixture: ComponentFixture<MentorPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

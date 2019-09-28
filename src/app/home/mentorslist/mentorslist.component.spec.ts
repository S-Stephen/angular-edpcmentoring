import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorslistComponent } from './mentorslist.component';

describe('MentorslistComponent', () => {
  let component: MentorslistComponent;
  let fixture: ComponentFixture<MentorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

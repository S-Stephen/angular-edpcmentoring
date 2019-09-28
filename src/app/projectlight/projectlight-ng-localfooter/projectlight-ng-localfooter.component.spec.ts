import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgLocalfooterComponent } from './projectlight-ng-localfooter.component';

describe('ProjectlightNgLocalfooterComponent', () => {
  let component: ProjectlightNgLocalfooterComponent;
  let fixture: ComponentFixture<ProjectlightNgLocalfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgLocalfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgLocalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

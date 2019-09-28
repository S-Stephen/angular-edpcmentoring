import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgNavComponent } from './projectlight-ng-nav.component';

describe('ProjectlightNgNavComponent', () => {
  let component: ProjectlightNgNavComponent;
  let fixture: ComponentFixture<ProjectlightNgNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

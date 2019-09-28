import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgTitlenavComponent } from './projectlight-ng-titlenav.component';

describe('ProjectlightNgTitlenavComponent', () => {
  let component: ProjectlightNgTitlenavComponent;
  let fixture: ComponentFixture<ProjectlightNgTitlenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgTitlenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgTitlenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

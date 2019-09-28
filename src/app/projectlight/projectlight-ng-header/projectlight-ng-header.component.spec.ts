import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgHeaderComponent } from './projectlight-ng-header.component';

describe('ProjectlightNgHeaderComponent', () => {
  let component: ProjectlightNgHeaderComponent;
  let fixture: ComponentFixture<ProjectlightNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

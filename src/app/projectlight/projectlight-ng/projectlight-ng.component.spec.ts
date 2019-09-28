import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgComponent } from './projectlight-ng.component';

describe('ProjectlightNgComponent', () => {
  let component: ProjectlightNgComponent;
  let fixture: ComponentFixture<ProjectlightNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

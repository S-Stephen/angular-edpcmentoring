import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgContentComponent } from './projectlight-ng-content.component';

describe('ProjectlightNgContentComponent', () => {
  let component: ProjectlightNgContentComponent;
  let fixture: ComponentFixture<ProjectlightNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

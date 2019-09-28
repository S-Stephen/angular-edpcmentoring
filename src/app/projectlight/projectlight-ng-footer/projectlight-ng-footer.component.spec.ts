import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlightNgFooterComponent } from './projectlight-ng-footer.component';

describe('ProjectlightNgFooterComponent', () => {
  let component: ProjectlightNgFooterComponent;
  let fixture: ComponentFixture<ProjectlightNgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlightNgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlightNgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

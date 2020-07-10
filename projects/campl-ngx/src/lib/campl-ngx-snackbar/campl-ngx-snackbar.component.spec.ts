import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxSnackbarComponent } from './campl-ngx-snackbar.component';

describe('CamplNgxSnackbarComponent', () => {
  let component: CamplNgxSnackbarComponent;
  let fixture: ComponentFixture<CamplNgxSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

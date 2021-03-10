import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxSnackbarComponent } from './campl-ngx-snackbar.component';

describe('CamplNgxSnackbarComponent', () => {
  let component: CamplNgxSnackbarComponent;
  let fixture: ComponentFixture<CamplNgxSnackbarComponent>;

  beforeEach(waitForAsync(() => {
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

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxFooterComponent } from './campl-ngx-footer.component';

describe('CamplNgxFooterComponent', () => {
  let component: CamplNgxFooterComponent;
  let fixture: ComponentFixture<CamplNgxFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgxFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

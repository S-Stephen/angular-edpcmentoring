import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxContentComponent } from './campl-ngx-content.component';

describe('CamplNgxContentComponent', () => {
  let component: CamplNgxContentComponent;
  let fixture: ComponentFixture<CamplNgxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgxContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

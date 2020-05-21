import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxMessageComponent } from './campl-ngx-message.component';

describe('CamplNgxMessageComponent', () => {
  let component: CamplNgxMessageComponent;
  let fixture: ComponentFixture<CamplNgxMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

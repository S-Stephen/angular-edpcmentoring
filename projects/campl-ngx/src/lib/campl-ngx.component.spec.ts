import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCamplNgxComponent } from './campl-ngx.component';

describe('CamplComponent', () => {
  let component: LibCamplNgxComponent;
  let fixture: ComponentFixture<LibCamplNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibCamplNgxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCamplNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

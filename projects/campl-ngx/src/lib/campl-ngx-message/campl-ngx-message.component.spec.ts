import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxMessageComponent } from './campl-ngx-message.component';

import { RouterTestingModule } from '@angular/router/testing'; // spy

describe('CamplNgxMessageComponent', () => {
  let component: CamplNgxMessageComponent;
  let fixture: ComponentFixture<CamplNgxMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CamplNgxMessageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxMessageComponent);
    component = fixture.componentInstance;
    component.msgin = {type: 'alert', value: 'alert message'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

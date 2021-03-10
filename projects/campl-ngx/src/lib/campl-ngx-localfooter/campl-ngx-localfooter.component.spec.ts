import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CamplNgxLocalfooterComponent } from './campl-ngx-localfooter.component';
import { CamplService } from '../services/campl.service';

// on init the component will look for and utilise the injected service: campl-service
// we need to create a stub of this service that will generate output enabling
// the component to render
class MockCampl {
  public getConfig() {
    return {
      local_footer_col1: [
        { label: 'col1_item1_label', link: 'col1_item1_link1' },
        { label: 'col1_item2_label', link: 'col1_item2_link1' }
      ],
      local_footer_col2: [
        { label: 'col2_item1_label', link: 'col2_item1_link1' }
      ],
      local_footer_col3: [
        { label: 'col3_item1_label', link: 'col3_item1_link1' }
      ],
      local_footer_col4: [
        { label: 'col4_item1_label', link: 'col4_item1_link1' }
      ]
    };
  }
}

describe('CamplNgxLocalfooterComponent', () => {
  let component: CamplNgxLocalfooterComponent;
  let fixture: ComponentFixture<CamplNgxLocalfooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgxLocalfooterComponent],
      providers: [{ provide: CamplService, useClass: MockCampl }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxLocalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display first item in list 1', () => {
    const local_foot_col_1_select = By.css('.list-1 h3 a');
    // fixture.debugElement.query(By.css('.campl-local-footer')) ===
    const result = fixture.debugElement.query(local_foot_col_1_select);
    expect(result.nativeElement.textContent.trim()).toBe('col1_item1_label');
  });
  it('should display first item in list 2', () => {
    const local_foot_col_2_select = By.css('.list-2 h3 a');
    // fixture.debugElement.query(By.css('.campl-local-footer')) ===
    const result = fixture.debugElement.query(local_foot_col_2_select);
    expect(result.nativeElement.textContent.trim()).toBe('col2_item1_label');
  });
  it('should display first item in list 3', () => {
    const local_foot_col_3_select = By.css('.list-3 h3 a');
    // fixture.debugElement.query(By.css('.campl-local-footer')) ===
    const result = fixture.debugElement.query(local_foot_col_3_select);
    expect(result.nativeElement.textContent.trim()).toBe('col3_item1_label');
  });
  it('should display first item in list 4', () => {
    const local_foot_col_4_select = By.css('.list-4 h3 a');
    // fixture.debugElement.query(By.css('.campl-local-footer')) ===
    const result = fixture.debugElement.query(local_foot_col_4_select);
    expect(result.nativeElement.textContent.trim()).toBe('col4_item1_label');
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxTableComponent } from './campl-ngx-table.component';

import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CamplNgxTableComponent', () => {
  let component: CamplNgxTableComponent;
  let fixture: ComponentFixture<CamplNgxTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgxTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxTableComponent);
    component = fixture.componentInstance;
    // pass our inputs
    component.headings$ = of([
      [{ value: 'heading1' }, { value: 'heading2' }, { value: 'heading3' }]
    ]);
    component.data$ = of([
      [
        [
          { value: 'row1 col1' },
          { value: 'row1 col2' },
          { value: 'row1 col3' }
        ],
        [{ value: 'row2 col1' }, { value: 'row2 col2' }, { value: 'row2 col3' }]
      ]
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display headings and content correctly', () => {
    // test first heading and first data
    // inner text of first heading should be 'heading1'
    const heading1 = By.css('thead th');
    expect(
      fixture.debugElement.query(heading1).nativeElement.textContent.trim()
    ).toBe('heading1');

    const td1 = By.css('tbody td');
    // Nb this element also includes a span for the stacked table headings
    // we therefore search for index of our string (textContent includes children)
    expect(
      fixture.debugElement
        .query(td1)
        .nativeElement.textContent.trim()
        .indexOf('row1 col1') !== -1
    ).toBe(true);
  });

  xit('should stack when reduced', () => {
    // TODO how do we test CSS is operating - should we in unit test?
  });
});

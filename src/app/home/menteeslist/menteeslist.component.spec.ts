import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeslistComponent } from './menteeslist.component';

describe('MenteeslistComponent', () => {
  let component: MenteeslistComponent;
  let fixture: ComponentFixture<MenteeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

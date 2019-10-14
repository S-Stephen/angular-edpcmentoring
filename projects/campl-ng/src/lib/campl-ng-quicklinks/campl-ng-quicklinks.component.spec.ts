import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgQuicklinksComponent } from './campl-ng-quicklinks.component';
import { Component, Injectable } from '@angular/core';

import { CamplService } from '../services/campl.service'

// Create a parent component, to hold quicklinks in
@Component({
    selector: 'test-ql',
    template:`
    <div>
        <div>Some div to click on</div>
        <campl-ng-quicklinks></campl-ng-quicklinks>
    </div>`
})
class TestQuicklinks{}

@Injectable()
class MockCamplService {
    private config: any;
    public getConfig(): any {
        return this.config={};
    }
}


fdescribe('CamplNgQuicklinksComponent', () => {
  let component: CamplNgQuicklinksComponent;
  let fixture: ComponentFixture<CamplNgQuicklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQuicklinks, CamplNgQuicklinksComponent ],
      providers: [ {provide: CamplService, useClass: MockCamplService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgQuicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should toggle menu on click', () => {
      // test open close
  })

  xit('should close menu when click elsewhere on page', () => {
      // test open, click elsewhere close
  })

  xit('should follow menu link on click', () => {
      // test open close
  })

});

import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { By } from "@angular/platform-browser";
import { CamplNgQuicklinksComponent } from './campl-ng-quicklinks.component';
import { Component, Injectable, DebugElement } from '@angular/core';

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
        return this.config=[
        {'link':'testlink1',label:'label 1'},
        {'link':'testlink2',label:'label 2'},
        {'link':'testlink3',label:'label 3'}];
    }
}


fdescribe('CamplNgQuicklinksComponent', () => {
  let component: CamplNgQuicklinksComponent;
  let fixture: ComponentFixture<CamplNgQuicklinksComponent>;
  let linkToggle:  DebugElement;

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
    linkToggle = fixture.debugElement.query(
      By.css(".campl-quicklinks")
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle list on click', //fakeAsync(
  () => {
    let quicklinks_list_select = By.css(".campl-quicklinks-list");
      // test open close
    // hidden at the start
    expect(fixture.debugElement.query(quicklinks_list_select)).toBeNull(); //
  })
  //)

  xit('should close menu when click elsewhere on page', () => {
      // test open, click elsewhere close
  })

  xit('should follow menu link on click', () => {
      // test open close
  })

});

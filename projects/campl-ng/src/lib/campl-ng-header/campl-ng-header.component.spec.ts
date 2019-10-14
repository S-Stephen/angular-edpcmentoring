import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgHeaderComponent } from "./campl-ng-header.component";

import { CamplNgQuicklinksComponent } from "../campl-ng-quicklinks/campl-ng-quicklinks.component";

import { CamplService } from "../services/campl.service";

import { Injectable } from "@angular/core";

@Injectable()
class MockCamplService {
  private config: any;
  public getConfig(): any {
    return (this.config = [
      { link: "testlink1", label: "label 1" },
      { link: "testlink2", label: "label 2" },
      { link: "testlink3", label: "label 3" }
    ]);
  }
}

describe("CamplNgHeaderComponent", () => {
  let component: CamplNgHeaderComponent;
  let fixture: ComponentFixture<CamplNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgHeaderComponent, CamplNgQuicklinksComponent],
      providers: [{ provide: CamplService, useClass: MockCamplService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  xit("should display the menu when click on menu icon (#open-menu)", ()=>{});

  xit("should close the menu when open and click 'Home'", ()=>{});
});

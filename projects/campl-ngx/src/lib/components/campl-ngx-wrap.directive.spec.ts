import { CamplNgWrapDirective } from "./campl-ngx-wrap.directive";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { CamplNgCapabilitiesService } from "../services/campl-ngx-capabilities.service";
import { ReplaySubject } from "rxjs";

@Component({
  template: '<div class="someclass" camplNgWrap>My test div wit hwrap</div>'
})
class TestCamplNgWrapDirectiveComponent {}

describe("CamplNgWrapDirective", () => {
  let component: TestCamplNgWrapDirectiveComponent;
  let fixture: ComponentFixture<TestCamplNgWrapDirectiveComponent>;
  let mydiv: DebugElement;
  let fakeCapabilities;
  let capSubject = new ReplaySubject(1);

  beforeEach(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [CamplNgWrapDirective, TestCamplNgWrapDirectiveComponent],
      providers: [
        { provide: CamplNgCapabilitiesService, useValue: fakeCapabilities }
      ]
    });
    fixture = TestBed.createComponent(TestCamplNgWrapDirectiveComponent);
    component = fixture.componentInstance;
    mydiv = fixture.debugElement.query(By.css("div"));
  });
  it("unsupporting browsers should have campl-fixed-container class", () => {
    capSubject.next({ supported: false });
    expect(
      mydiv.nativeElement.classList.contains("campl-fixed-container")
    ).toBeTruthy();
  });
  it("supporting browsers should NOT have campl-fixed-container class", () => {
    capSubject.next({ supported: true });
    expect(
      mydiv.nativeElement.classList.contains("campl-fixed-container")
    ).not.toBeTruthy();
  });

  it("supporting and unsupporting browsers should have campl-wrap class", () => {
    capSubject.next({ supported: false });
    expect(mydiv.nativeElement.classList.contains("campl-wrap")).toBeTruthy();
    capSubject.next({ supported: true });
    expect(mydiv.nativeElement.classList.contains("campl-wrap")).toBeTruthy();
  });
});

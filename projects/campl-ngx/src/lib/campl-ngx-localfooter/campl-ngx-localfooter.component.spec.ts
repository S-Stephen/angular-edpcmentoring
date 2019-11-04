import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgxLocalfooterComponent } from "./campl-ngx-localfooter.component";
import { CamplService } from "../services/campl.service";

// on init the component will look for and utilise the injected service: campl-service
// we need to create a stub of this service that will generate output enabling
// the component to render
class MockCampl {
  public getConfig() {
    return {
      local_footer_col1: [{}],
      local_footer_col2: [{}],
      local_footer_col3: [{}],
      local_footer_col4: [{}]
    };
  }
}

describe("CamplNgxLocalfooterComponent", () => {
  let component: CamplNgxLocalfooterComponent;
  let fixture: ComponentFixture<CamplNgxLocalfooterComponent>;

  beforeEach(async(() => {
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

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});

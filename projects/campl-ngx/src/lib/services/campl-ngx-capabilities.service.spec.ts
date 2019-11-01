import { TestBed } from "@angular/core/testing";

import { CamplNgCapabilitiesService } from "./campl-ngx-capabilities.service";

describe("CamplNgCapabilitiesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CamplNgCapabilitiesService = TestBed.get(
      CamplNgCapabilitiesService
    );
    expect(service).toBeTruthy();
  });
});

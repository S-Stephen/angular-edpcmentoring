import { TestBed } from "@angular/core/testing";

import { CamplNgCapabilitiesService } from "./campl-ng-capabilities.service";

describe("CamplNgCapabilitiesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CamplNgCapabilitiesService = TestBed.get(
      CamplNgCapabilitiesService
    );
    expect(service).toBeTruthy();
  });
});

import { TestBed } from "@angular/core/testing";

import { CamplNgService } from "./campl-ng.service";

describe("CamplNgService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CamplNgService = TestBed.get(CamplNgService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FolderLoaderService } from './folder-loader.service';

describe('FolderLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FolderLoaderService = TestBed.get(FolderLoaderService);
    expect(service).toBeTruthy();
  });
});

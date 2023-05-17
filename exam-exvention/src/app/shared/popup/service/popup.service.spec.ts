import { TestBed } from '@angular/core/testing';

import { PopupService } from './popup.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('PopupService', () => {
  let service: PopupService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PopupService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(PopupService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should add post and return added post', () => {
    const name = 'test';
    const text = 'test';

    service.postFormData(name, text).subscribe((addedPost) => {
      expect(addedPost).toBe(name);
    });
    const req = httpTestingController.expectOne('https://343df210-bdc8-4d01-9893-220e303a45ca.mock.pstmn.io/contact/member');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(name);
  });
});

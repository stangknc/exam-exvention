import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PolicyComponent } from './policy.component';

describe('PolicyComponent', () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PolicyComponent,
      ]
    });
    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should search data success', () => {
  //   expect(component.search("สวัสดีการครบ")).toEqual('สวัสดีการครบ');
  // });

  /*
  test case
  กรณีเจอ แสดง
  กรณีไม่เจอ ไม่แสดง
  */
});

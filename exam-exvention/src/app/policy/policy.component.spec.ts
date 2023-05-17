import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PolicyComponent } from './policy.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PolicyComponent', () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;
  let policy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PolicyComponent,
        HeaderComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    policy = 'สวัสดีการครบ';
    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show data for search success', () => {
    expect(component.search('สวัสดีการครบ')).toBe();
    console.log('Hello from it');
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

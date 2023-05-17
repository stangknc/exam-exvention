import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PopupComponent } from './popup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PopupComponent,
        HeaderComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.sendForm()).toBe();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierPageComponent } from './atelier-page.component';

describe('AtelierPageComponent', () => {
  let component: AtelierPageComponent;
  let fixture: ComponentFixture<AtelierPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierPageComponent]
    });
    fixture = TestBed.createComponent(AtelierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

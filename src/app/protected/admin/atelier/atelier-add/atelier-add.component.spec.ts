import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierAddComponent } from './atelier-add.component';

describe('AtelierAddComponent', () => {
  let component: AtelierAddComponent;
  let fixture: ComponentFixture<AtelierAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierAddComponent]
    });
    fixture = TestBed.createComponent(AtelierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

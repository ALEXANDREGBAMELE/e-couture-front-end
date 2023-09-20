import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierDeleteComponent } from './atelier-delete.component';

describe('AtelierDeleteComponent', () => {
  let component: AtelierDeleteComponent;
  let fixture: ComponentFixture<AtelierDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierDeleteComponent]
    });
    fixture = TestBed.createComponent(AtelierDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierEditComponent } from './atelier-edit.component';

describe('AtelierEditComponent', () => {
  let component: AtelierEditComponent;
  let fixture: ComponentFixture<AtelierEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierEditComponent]
    });
    fixture = TestBed.createComponent(AtelierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

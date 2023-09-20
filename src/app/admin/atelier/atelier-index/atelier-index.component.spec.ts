import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierIndexComponent } from './atelier-index.component';

describe('AtelierIndexComponent', () => {
  let component: AtelierIndexComponent;
  let fixture: ComponentFixture<AtelierIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierIndexComponent]
    });
    fixture = TestBed.createComponent(AtelierIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

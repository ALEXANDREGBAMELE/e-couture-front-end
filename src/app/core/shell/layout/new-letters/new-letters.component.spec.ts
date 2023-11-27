import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLettersComponent } from './new-letters.component';

describe('NewLettersComponent', () => {
  let component: NewLettersComponent;
  let fixture: ComponentFixture<NewLettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLettersComponent]
    });
    fixture = TestBed.createComponent(NewLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

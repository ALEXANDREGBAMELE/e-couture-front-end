import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousArticlesComponent } from './tous-articles.component';

describe('TousArticlesComponent', () => {
  let component: TousArticlesComponent;
  let fixture: ComponentFixture<TousArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousArticlesComponent]
    });
    fixture = TestBed.createComponent(TousArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

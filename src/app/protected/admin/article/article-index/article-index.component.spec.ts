import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleIndexComponent } from './article-index.component';

describe('ArticleIndexComponent', () => {
  let component: ArticleIndexComponent;
  let fixture: ComponentFixture<ArticleIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleIndexComponent]
    });
    fixture = TestBed.createComponent(ArticleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleArticleComponent } from './modele-article.component';

describe('ModeleArticleComponent', () => {
  let component: ModeleArticleComponent;
  let fixture: ComponentFixture<ModeleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeleArticleComponent]
    });
    fixture = TestBed.createComponent(ModeleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

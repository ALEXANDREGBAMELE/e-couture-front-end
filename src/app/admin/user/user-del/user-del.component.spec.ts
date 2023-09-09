import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDelComponent } from './user-del.component';

describe('UserDelComponent', () => {
  let component: UserDelComponent;
  let fixture: ComponentFixture<UserDelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDelComponent]
    });
    fixture = TestBed.createComponent(UserDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

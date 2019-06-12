import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListWithFiltrationComponent } from './users-list-with-filtration.component';

describe('UsersListWithFiltrationComponent', () => {
  let component: UsersListWithFiltrationComponent;
  let fixture: ComponentFixture<UsersListWithFiltrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListWithFiltrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListWithFiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

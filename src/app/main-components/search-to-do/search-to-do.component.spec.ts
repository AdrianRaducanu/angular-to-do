import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToDoComponent } from './search-to-do.component';

describe('SearchToDoComponent', () => {
  let component: SearchToDoComponent;
  let fixture: ComponentFixture<SearchToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

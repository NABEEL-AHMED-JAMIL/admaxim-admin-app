import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePracticeComponent } from './table-practice.component';

describe('TablePracticeComponent', () => {
  let component: TablePracticeComponent;
  let fixture: ComponentFixture<TablePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

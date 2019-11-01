import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableDataComponent } from './result-table-data.component';

describe('ResultTableDataComponent', () => {
  let component: ResultTableDataComponent;
  let fixture: ComponentFixture<ResultTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

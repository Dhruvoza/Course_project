import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDispComponent } from './course-disp.component';

describe('CourseDispComponent', () => {
  let component: CourseDispComponent;
  let fixture: ComponentFixture<CourseDispComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDispComponent]
    });
    fixture = TestBed.createComponent(CourseDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

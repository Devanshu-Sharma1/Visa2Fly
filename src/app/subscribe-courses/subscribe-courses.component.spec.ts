import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeCoursesComponent } from './subscribe-courses.component';

describe('SubscribeCoursesComponent', () => {
  let component: SubscribeCoursesComponent;
  let fixture: ComponentFixture<SubscribeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

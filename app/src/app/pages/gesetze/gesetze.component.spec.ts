import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesetzeComponent } from './gesetze.component';

describe('GesetzeComponent', () => {
  let component: GesetzeComponent;
  let fixture: ComponentFixture<GesetzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesetzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesetzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

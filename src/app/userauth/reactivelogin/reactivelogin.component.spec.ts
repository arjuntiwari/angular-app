import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveloginComponent } from './reactivelogin.component';

describe('ReactiveloginComponent', () => {
  let component: ReactiveloginComponent;
  let fixture: ComponentFixture<ReactiveloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

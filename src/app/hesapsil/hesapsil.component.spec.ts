import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapsilComponent } from './hesapsil.component';

describe('HesapsilComponent', () => {
  let component: HesapsilComponent;
  let fixture: ComponentFixture<HesapsilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HesapsilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HesapsilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

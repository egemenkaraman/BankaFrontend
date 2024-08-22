import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakiyelerComponent } from './bakiyeler.component';

describe('BakiyelerComponent', () => {
  let component: BakiyelerComponent;
  let fixture: ComponentFixture<BakiyelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakiyelerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakiyelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityLandingAreaComponent } from './community-landing-area.component';

describe('CommunityLandingAreaComponent', () => {
  let component: CommunityLandingAreaComponent;
  let fixture: ComponentFixture<CommunityLandingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityLandingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityLandingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

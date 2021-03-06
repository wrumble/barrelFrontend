import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingListFormComponent } from './mailing-list-form.component';

describe('MailingListFormComponent', () => {
  let component: MailingListFormComponent;
  let fixture: ComponentFixture<MailingListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, Input} from "@angular/core";
import {NgClass} from "@angular/common";
import {CountUpModule} from "ngx-countup";

@Component({
  selector: 'app-stat',
  template: `
    <div class="">
      <!-- card -->
      <div class="card card-animate {{bg_color}}">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1 overflow-hidden">
              <p class="text-uppercase fw-bold text-white-50 text-truncate mb-0">{{ title }}</p>
            </div>
            <div class="flex-shrink-0">
              <h5 class="text-white fs-14 mb-0">
                <i class="fs-13 align-middle float-start"
                   [ngClass]=" {'ri-arrow-right-up-line': profit === 'up', 'ri-arrow-right-down-line': profit === 'down'}"></i>
                @if (profit === 'up' || profit === 'equal') {
                  <span>+</span>{{ persantage }} %
                } @else {
                  <span>-</span>{{ persantage }} %
                }
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-end justify-content-between mt-4">
            <div>

              <h4 class="fs-22 fw-bold ff-secondary text-white mb-4">
                @if (title === 'TOTAL EARNINGS' || title === 'MY BALANCE') {
                  <span>$</span>
                }
                <span [countUp]="value" class="counter-value" [options]="option"></span>
                @if (title === 'TOTAL EARNINGS' || title === 'MY BALANCE') {
                  <span>K</span>
                }
                @if (title === 'CUSTOMERS') {
                  <span>M</span>
                }
              </h4>
              <a href="" class="text-decoration-underline text-white-50">{{ link }}</a>
            </div>
            <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title rounded fs-3 bg-white bg-opacity-10">
                        <i class="bx {{icon}} text-white"></i>
                    </span>
            </div>
          </div>
        </div><!-- end card body -->
      </div><!-- end card -->
    </div><!-- end col -->
  `,
  imports: [
    NgClass,
    CountUpModule
  ]
})
export class StatComponent {

  @Input() title: string | undefined;
  @Input() value: any | undefined;
  @Input() icon: string | undefined;
  @Input() persantage: string | undefined;
  @Input() profit: string | undefined;
  @Input() bg_color: string | undefined;
  @Input() link: string | undefined;

  num = 0;

  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };
}

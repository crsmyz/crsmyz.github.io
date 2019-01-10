import { Injectable } from '@angular/core';
import { DeckProbabilityContext } from './app.model';

@Injectable()
export class HyperGeometricCalcService {
    deckProbContext: DeckProbabilityContext;
    deckCount: number;
    probabilityResults: number[] = [];
    drawResults: number[] = [];

    constructor() { }

    public calcHypGeo(deckCount?: number) {
        if (deckCount) {
          for (let i = 1; i < 5; i++) {
            this.deckProbContext = {
              deckCardCount: 53, // population size, 53
              subPopSize: i, // sucesses in population, 4 glory bringers, etc.
              sampleSize: 8, // number of cards we're drawing, ie 1
              xValue: 1 // odds of drawing at least 1
            };
            return this.compute();
          }
        }
      }

      private compute() {
        const nn = Math.floor(this.deckProbContext.deckCardCount);
        const m = Math.floor(this.deckProbContext.subPopSize);
        const n = Math.floor(this.deckProbContext.sampleSize);
        const x = Math.floor(this.deckProbContext.xValue);
        let prob;
        if (n <= 0 || m <= 0 || nn <= 0) {
          alert('Parameters must be positive integers');
          prob = 0;
        } else if (m > nn || n > nn) {
          alert('m and n must be less than N');
          prob = 0;
        } else if (x < 0 || x < n + m - nn) {
          prob = 0;
        } else if (x >= n || x >= m) {
          prob = 1;
        } else {
          if (2 * m > nn) {
            if (2 * n > nn) {
              prob = this.hyp(nn - m - n + x, nn - n, nn - m, nn);
            } else {
              prob = 1 - this.hyp(n - x - 1, n, nn - m, nn);
            }
          } else if (2 * n > nn) {
            prob = 1 - this.hyp(m - x - 1, m, nn - n, nn);
          } else {
            prob = this.hyp(x, n, m, nn);
          }
        }
        prob = Math.round(prob * 100000) / 100000;
        if (!this.deckCount) {
          this.probabilityResults.push(prob);
        } else if (this.deckCount) {
          this.drawResults.push(prob);
        }
        return prob;
      }

      private hyp(x, n, m, nn) {
        let nz, mz;
        // best to have n<m
        if (m < n) {
          nz = m;
          mz = n;
        } else {
          nz = n;
          mz = m;
        }
        let h = 1;
        let s = 1;
        let k = 0;
        let i = 0;
        while (i < x) {
          while (s > 1 && k < nz) {
            h = h * (1 - mz / (nn - k));
            s = s * (1 - mz / (nn - k));
            k = k + 1;
          }
          h = h * (nz - i) * (mz - i) / (i + 1) / (nn - nz - mz + i + 1);
          s = s + h;
          i = i + 1;
        }
        while (k < nz) {
          s = s * (1 - mz / (nn - k));
          k = k + 1;
        }
        return s;
      }
}

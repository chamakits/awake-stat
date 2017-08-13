import { Stats } from './stats';
import * as stats from './stats';

var statsInfo: Stats = stats.getStat();
console.log(JSON.stringify(statsInfo, null, 2));
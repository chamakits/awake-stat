import * as ip from 'ip';
import * as os from 'os';
import * as prettyBytes from 'pretty-bytes';

interface Stats {
    ip?: string;
    cpu?: CpuInfo;
    memory?: any;
    load?: number[];
    platform?: PlatformInfo;
}

interface CpuInfo {
    count: number,
    details: os.CpuInfo[]
}

interface PlatformInfo {
    platform: string,
    release: string,
    type: string
}

var stats: Stats = {};

stats.ip = ip.address();
var cpus = os.cpus();
stats.cpu = {
    count: cpus.length,
    details: cpus
}
stats.memory = prettyBytes(os.totalmem());
stats.load = os.loadavg();
stats.platform = {
    platform: os.platform(),
    release: os.release(),
    type: os.type()
};

console.log(JSON.stringify(stats, null, 2));
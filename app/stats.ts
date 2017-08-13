import * as ip from 'ip';
import * as os from 'os';
import * as prettyBytes from 'pretty-bytes';

export interface Stats {
    ip?: string;
    hostname?: string;
    cpu?: CpuInfo;
    memory?: any;
    load?: number[];
    platform?: PlatformInfo;
}

export interface CpuInfo {
    count: number,
    details: os.CpuInfo[]
}

export interface PlatformInfo {
    platform: string,
    release: string,
    type: string
}

export function getStat(): Stats {
    var stats: Stats = {};

    stats.ip = ip.address();
    stats.hostname = os.hostname();
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
    return stats;
}
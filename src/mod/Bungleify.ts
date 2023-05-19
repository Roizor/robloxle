import { Mod } from "./Mod.ts";

export class Bungleify extends Mod {
    constructor() {
        super("Bungleify", () => {
            window.Roblox.BundleDetector = 'trolol';
        })
    }
}
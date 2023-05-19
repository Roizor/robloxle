export class Mod {
    name: string;
    exec: () => void;
    constructor(name: string, exec: () => void) {
        this.name = name;
        this.exec = exec;
    }

    get modName() {
        return this.name;
    }

    set modName(name: string) {
        this.name = name;
    }
}
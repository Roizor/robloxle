export class Mod {
    name;
    exec;
    constructor(name, exec) {
        this.name = name;
        this.exec = exec;

        console.log(`{Robloxle: Mod Loader} [${name} ran]`)
        this.exec();
    }

    get modName() {
        return this.name;
    }

    set modName(name) {
        this.name = name;
    }
}
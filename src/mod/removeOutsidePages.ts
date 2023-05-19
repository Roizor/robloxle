import { Mod } from "./Mod.ts";

export class removeOutsidePages extends Mod {
    constructor() {
        super("Remove Outside Pages", () => {
            const linkList = [
                'nav-blog',
                'nav-shop',
                'nav-giftcards'
            ];

            linkList.forEach(link => {
                document.getElementById(link)?.remove();
            })
        })
    }
}
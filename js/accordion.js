class Accordion {
    constructor(sel) {
        this.sel = document.querySelector(sel);
        let headers = document.querySelectorAll("header"); 

        for (let i = 0; i < headers.length; i++) {
            headers[i].addEventListener("click", () => {
                this.toggle(headers[i]);
            });
        };
    }

    open(sel) {
        let openedEl = this.sel.querySelector(".opened");


        if (openedEl !== null) {
            openedEl.classList.remove("opened");
        }

        sel.parentElement.classList.add("opened");
    }

    close(sel) {
        sel.parentElement.classList.remove("opened");
    }
    
    toggle(sel) {
        if (this.isOpened(sel)) {
            this.close(sel);
        } else {
            this.open(sel);
        };
    }

    isOpened(sel) {
        return sel.parentElement.classList.contains("opened");
    }
}

let acc = new Accordion(".accordion");
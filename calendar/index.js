let monthDictionary = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends HTMLElement {
    constructor(){
        super();
        let template = document.getElementById(`CalendarTemplate`);
        let shadowRoot = this.attachShadow({mode:`open`});
        let main = shadowRoot.appendChild(template.content.cloneNode(true));

        let month = this.getAttribute("month") || 0;
        let year = parseInt(this.getAttribute("year") || 2019);

        let date = new Date(year,month,1);
        let days = new Date(year,parseInt(month)+1,0).getDate();
        let day = date.getDay();

        let z = 0;

        shadowRoot.getElementById("MonthTitle").innerHTML = monthDictionary[month];

        let table = document.createElement(`table`);
        for (let i = 0; i < 6; i++) {
            let row = document.createElement(`tr`);
            table.appendChild(row);

            for (let j = 0; j < 7; j++){
                let cell = document.createElement(`td`);
                if ((i >= 1 || j >= day) && (z < days)) {
                    z++;
                    cell.innerHTML = z;
                }
                row.appendChild(cell);
            }
        }
        shadowRoot.getElementById(`TableContents`).appendChild(table);
    };
}

customElements.define(`my-calendar`, Calendar);
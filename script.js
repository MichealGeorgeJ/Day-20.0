const container = document.createElement("div");
container.classList.add("container",);
document.body.append(container);

const box = document.createElement("div");
box.classList.add("row");
container.append(box);

async function getCustomerSatelites() {

    const response = await fetch("https://isro.vercel.app/api/customer_satellites");
    const data = await response.json();
    for (const key of data.customer_satellites) {
        
            const card = document.createElement("div");
            card.classList.add("card", "text-center", "col-sm-12", "col-lg-4");
            box.append(card);
    
            const header = document.createElement("H1");
            header.setAttribute("id", "title");
            header.classList.add("text-center");
            header.innerHTML = `${key.id}`;
            card.append(header);
    
            const para = document.createElement("p");
            para.classList.add("card-body");
            para.innerText = `Country:${key.country}
    launch_date:${key.launch_date}
    Mass:${key.mass}
    Launcher:${key.launcher}
    `;
            card.append(para);
        }
        }
        
        
        
        

        
    

    getCustomerSatelites();


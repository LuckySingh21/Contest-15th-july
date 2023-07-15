//url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';


async function getMenu() {
   
    // Storing response
    let response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
   
    // Storing data in form of JSON
    let data = await response.json();

    document.getElementById("videoContainerId").innerHTML = "";
    let str = ``;
    for(let i = 0;i<data.length;i++){
        str += `<div class="card">
        <div class="upper">
            <img src="${data[i].imgSrc}" alt="">
        </div>
        <div class="lower">
            <div class="lowerLeft">
                <div>
                    <h4 class="cardText">${data[i].name}</h4>
                </div>
                <div>
                    <h4 class="cardText">$${data[i].price}/-</h4>
                </div>
            </div>
            <div class="lowerRight">
                <img src="Assets/Images/Group 3.png" alt="">
            </div>
        </div>
    </div>`
    }
    document.getElementById("videoContainerId").innerHTML = str;

    console.log(data);
}

getMenu();

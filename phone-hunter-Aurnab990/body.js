function searchItems(){
    const searchItem = document.getElementById('input-value');
    const searchValue = searchItem.value;
    
    searchItem.value='';
    if(searchValue == ''){
        alert("Please Enter Your Fav Phone Name");
    }
    //API calling....
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
     fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

//Display search items
function displayPhone(phones){
    console.log(phones);
    const phonesName = phones.slice(0,20);
    const phoneName = document.getElementById('phone-name');
    phoneName.textContent='';
    if(phones.length == 0){
        alert("Not Found");
    }
    

    phonesName.forEach(phone =>{
        //console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card h-50 rounded w-50 col-sm">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          
          <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">Details</button>
        </div>
      </div>
        `
        phoneName.appendChild(div);
    })
    
}
// Display phone details
const loadPhoneDetail = phone =>{
    const url =`https://openapi.programming-hero.com/api/phone/${phone}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhonDetails(data.data))
}
const displayPhonDetails = phones =>{
    window.scrollTo(0,0);
    console.log(phones);
    const phoneDiv = document.getElementById('phone-details');
    phoneDiv.textContent='';
    
    
    
    phoneDiv.innerHTML = `
    <img class="w-10 h-10 mt-5" src="${phones.image}" class="card-img-top" alt="...">
    <h4><strong>Name: </strong>${phones.name}</h4>
    
    <h6><strong>Sensors: </strong>${phones.mainFeatures.sensors}</h6>
    <h6><strong>Storage: </strong>${phones.mainFeatures.storage}</h6>
    <h6><strong>Display: </strong>${phones.mainFeatures.displaySize}</h6>
    <h6><strong>Chipset: </strong>${phones.mainFeatures.chipSet}</h6>
    <h6>${phones.others.WLAN}</h6>
    <h6><strong>Bluetooth: </strong>${phones.others.Bluetooth}</h6>
    <h6><strong>GPS: </strong>${phones.others.GPS}</h6>
    <h5>${phones.releaseDate}</h5>
       
    `   
}
//more



    
    //API calling....
    /*const url =`https://openapi.programming-hero.com/api/phone/${brand}`;*/
     





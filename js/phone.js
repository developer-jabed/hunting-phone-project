const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';


    // const showAllContainer = document.getElementById('show-all-container');
    // if(phones.length > 12 && !isShowAll){
    //     showAllContainer.classList.remove('hidden');
    // }
    // else{
    //     showAllContainer.classList.add('hidden');
    // }
    console.log(isShowAll);

    // display first 12 phones 
    // if(!isShowAll){
    //     phones = phones.slice(0,12);
    // }


    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = ` 
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title"> ${phone.phone_name} </h2>
          <p></p>
          <div class="card-actions justify-end">
            <button onclick="handleShowDetails ('${phone.slug}'); my_modal_5.showModal()" class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
      `;
        phoneContainer.appendChild(phoneCard);
    })
    toggleLoadingSpinner(false);
}

const handleShowDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`);
    const data = await res.json();
    showPhoneDetails()
}

const showPhoneDetails = (phone) => {

}
// handle search Button

const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}



const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');

    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}


const handleShowAll = () => {
    handleSearch(true);
}
// loadPhone();
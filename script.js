// Navigasi Bar
var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top='-100px';
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})    

// Form Order
document.addEventListener("DOMContentLoaded", () => {
    const kategori = document.getElementById("kategori");
    const subkategori = document.getElementById("subkategori");
    
    const dataSubkategori = {
        edp: ["Untitled Humans", "Addict", "Ambar Janma", "Essence of The Night", "Essence of The Sun", "Unrosed", "Farhampton", "Unpatched", "The O"],
        oil: ["Bergamot", "Cinnamon Bark", "Eucalyptus", "Jasmine", "Lavender", "Lemongrass", "Lily", "Sandalwood", "Bulgarian Rose"],
        rd: ["A Kitchen of Warm Lemon Pie", "Room Full of Ideas", "A Room of Zen", "This is a Safe Space", "This Room Makes O "] 
        
    };
    
    kategori.addEventListener("change", () => {
        const pilihan = kategori.value;
        
        subkategori.innerHTML = '<option value="">--Choose Product--</option>';
        
        if (pilihan && dataSubkategori[pilihan]) {
            dataSubkategori[pilihan].forEach(item => {
                const option = document.createElement("option");
                option.value = item.toLowerCase();
                option.textContent = item;
                subkategori.appendChild(option);
            });
        }
    });
});

// Dropdown Menu Artikel
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); 
            const dropdownMenu = this.nextElementSibling;

           
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none'; 
            } else {
                dropdownMenu.style.display = 'block'; 
            }
        });
    });


// ============Side Bar==================

const menuItems = document.querySelectorAll('.menu-item');


// removing active class to other menu items
const removeClassActive = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click' , () =>{
        removeClassActive();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
   
})


// =========Messages===============
const MessageNotification = document.querySelector('#messages');
const Messages = document.querySelector('.messages');

MessageNotification.addEventListener('click' , () => {
    Messages.style.boxShadow = ' 0 0 2.5rem var(--color-primary)';
    MessageNotification.querySelector('.notification-count').style.display = 'none';
    Messages.style.transition = 'all 2s ease';

    setTimeout(()=> {
        Messages.style.boxShadow = 'none';
    }, 2000);
})

//==============Messages search==========
const messageSearch = document.querySelector('#messages-search');
const message = Messages.querySelectorAll('.message');

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = "flex";
        }else{
            chat.style.display = "none";
        }
    })
}


messageSearch.addEventListener('keyup', searchMessage);



// Theme

const  theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customise-theme');

// Opens Modal
const openThemeModel = () => {
    themeModel.style.display = "grid";
}

theme.addEventListener('click', openThemeModel)

// Closes Modal
const closeTheModal = (e) => {
    if(e.target.classList.contains('customise-theme')){
        themeModel.style.display = "none";
    }
}

themeModel.addEventListener('click', closeTheModal)




// Font Size
const fontSizesSpan = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

const removeActive = () => {
    fontSizesSpan.forEach(size =>{
       size.classList.remove('bg');
    })
}


fontSizesSpan.forEach(size => {
    
    size.addEventListener('click', () => {
        let fontSize;
        // size.style.background = 'rgb(132, 0, 255)';
        
        removeActive();    
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
            

        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');

        } else if(size.classList.contains("font-size-3")){
            fontSize = '16px';
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if(size.classList.contains("font-size-4")){
            fontSize = '19px';
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        } else if(size.classList.contains("font-size-5")){
            fontSize = '22px';
            root.style.setProperty("----sticky-top-left", "-12rem");
            root.style.setProperty("----sticky-top-right", "-35rem");
        }
        // // Remove Active classs
        size.classList.add('bg');
        document.querySelector('html').style.fontSize = fontSize; 
    })

    
})


// Primary Colors

const colorPrimary = document.querySelectorAll('.choose-color span');

const removeColorActive = () =>{
    colorPrimary.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
} 

colorPrimary.forEach(color => {

    color.addEventListener('click', () => {
        let hue;
        
        removeColorActive();
        if(color.classList.contains("color-1")){
            hue = 252;
        }else if(color.classList.contains('color-2')){
            hue = 52;
        }else if(color.classList.contains("color-3")){
            hue = 352;
        }else if(color.classList.contains("color-4")){
            hue = 152;
        }else if(color.classList.contains("color-5")){
            hue = 202;
        } 
        root.style.setProperty('--primary-hue', hue);
        color.classList.add('active');
    })
})

// BackGround Colors

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

const dot1 = document.querySelector('.bg-1 span');
const dot2 = document.querySelector('.bg-2 span');
const dot3 = document.querySelector('.bg-3 span');
  
let lightColor;
let whiteColor;
let darkColor;

const changeBG = () => {
    root.style.setProperty('--color-lightness-dark', darkColor);
    root.style.setProperty('--color-lightness-light', lightColor);
    root.style.setProperty('--color-lightness-white', whiteColor);
}

bg2.addEventListener('click', () => {
    lightColor = '15%';
    whiteColor = '20%';
    darkColor = '95%';

    // Adding Active class
    bg2.classList.add('active');
    dot2.classList.add('dot');
    // Removing Active class
    bg1.classList.remove('active');
    dot1.classList.remove('dot');
    bg3.classList.remove('active');
    dot3.classList.remove('dot');
    changeBG();
})

bg3.addEventListener('click', () => {
    lightColor = '0%';
    whiteColor = '10%';
    darkColor = '95%';

    // Adding Active class
    bg3.classList.add('active');
    dot3.classList.add('dot');
    // Removing Active class
    bg1.classList.remove('active');
    dot1.classList.remove('dot');
    bg2.classList.remove('active');
    dot2.classList.remove('dot');
    changeBG();
})

bg1.addEventListener('click', () => {
    

    // Adding Active class
    bg1.classList.add('active');
    dot1.classList.add('dot');
    // Removing Active class
    bg2.classList.remove('active');
    dot2.classList.remove('dot');
    bg3.classList.remove('active');
    dot3.classList.remove('dot');
    window.location.reload();
})
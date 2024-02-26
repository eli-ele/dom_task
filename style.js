export function createBox(width, height, box_backgroundColor) {
    const main_container = document.querySelector("main") 
    const box = document.createElement("div")
    box.style.width = width;
    box.style.height = height;
    box.style.backgroundColor = box_backgroundColor;
    main_container.appendChild(box);
}
const container = document.getElementById("container");
container.style.display = "flex";
container.style.justifyContent = "center";

export function box(display,justifyContent,alignItems,textAlign,width,height,backgroundColor,box_margin,padding,textContent,image_url,paragraf_text) {
    const box = document.createElement("div");
    const img = document.createElement("img");
    const paragraf=document.createElement("p")
    box.style.display = display;
    box.style.justifyContent = justifyContent;
    box.style.alignItems = alignItems;
    box.style.textAlign = textAlign;
    box.style.width = width;
    box.style.height = height;
    box.style.backgroundColor = backgroundColor;
    box.style.margin = box_margin;
    box.style.padding = padding;
    box.textContent = textContent;
    img.src = image_url;
    img.style.width = "100px";
    img.style.height = "100px";
    box.appendChild(img);
    paragraf.textContent = paragraf_text;
    box.appendChild(paragraf);
    return container.appendChild(box); 
    
}




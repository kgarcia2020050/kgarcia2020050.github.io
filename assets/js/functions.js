$(document).ready(function () {


    for (let info of dataPreview) {
        if (info.right) {
            $(".content-blgCards-b").append(
                '<div class="blg-card1-b"><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
                info.title +
                '</h1></div><div class="blg-text-b"><p>' +
                info.text +
                '</p></div><div class="blg-btn-b"><a href="'+info.link+'" target="_blank"><button id="' +
                info.id +
                '" class="btn-vm-b verMas" role="button">'+info.button+'</button></a></div></div><img src="' +
                info.img +
                '" alt="' +
                info.imgName +
                '" /></div>'
            );
        }
        else {
            $(".content-blgCards-b").append(
                '<div class="blg-card2-b"><img src="' +
                info.img +
                '" alt="' +
                info.imgName +
                '" /><div class="blh-info-b"><div class="blg-tittle-b"><h1>' +
                info.title +
                '</h1></div><div class="blg-text-b"><p>' +
                info.text +
                '</p></div><div class="blg-btn-b"><a href="'+info.link+'" target="_blank"><button id="' +
                info.id +
                '" class="btn-vm-b verMas" role="button">'+info.button+'</button></a></div></div></div>'
            );

        }

    }
});
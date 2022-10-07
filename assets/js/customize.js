// language toggle button
var toggle = document.getElementById('lang-toggle');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
    toggleNumber = !toggleNumber;
    if (toggleNumber) {
        toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
        toggleContainer.style.backgroundColor = '#ff8d29';
    } else {
        toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
        toggleContainer.style.backgroundColor = '#ff8d29';
    }
    console.log(toggleNumber)
});

// slideshow
$(function(){
    stripSlider()
    function stripSlider(){
        imgSrc=new Array()
        $(".slider-wrapper img").each(function(index,element){
            imgSrc.push($(element).attr("src"))
        })
        $(".slider-wrapper img").remove()
        $(".slider-wrapper").append("<img>")
        $(".slider-wrapper img").attr("src",imgSrc[0])
        playSlider(0,0)
    }

    function fadeSlider(Item,_No,_r){
        if ($(".slider-wrapper img").length >2){
                Item.fadeOut(50,function(){
                    fadeSlider($(".slider-wrapper img").eq(arrRandom[_r+1]),_No,_r+1)
                })       
            if (_r+1==arrRandom.length){
                $(".slider-wrapper img:first-child").animate({width:"100%"},2000,function(){
                    $(".slider-wrapper img[style*='clip']").remove()
                    playSlider(_No+1,0)
                })
            }     
        }
    }


    function strip(_No){
        for (var j=0;j<14;j++){
            right=(j+1)*50
            left=j*50
            for (var i=0;i<8;i++){
                $(".slider-wrapper").append("<img>")
                $(".slider-wrapper img").last().attr("src",$(".slider-wrapper img").first().attr("src"))
                var bottom=(i+1)*50
                var top=i*50
                $(".slider-wrapper img").last().css("clip","rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)")
            }
        }
        $(".slider-wrapper img").first().before("<img>")
        $(".slider-wrapper img").first().attr("src",imgSrc[_No+1])
        $(".slider-wrapper img:nth-child(2)").remove()
    }


    function playSlider(_No,_r){
        if (_No >= imgSrc.length -1){
            _No= -1
        }
        strip(_No)
        random()
        fadeSlider($(".slider-wrapper img").eq(arrRandom[_r]),_No,_r)  
    
    }


    function random(){
        arrRandom=new Array()
        while (arrRandom.length != 112){
            randomNo=Math.ceil(Math.random()*112)
            if (arrRandom.indexOf(randomNo) == -1){
                arrRandom.push(randomNo)
            }
        }  
    }
})
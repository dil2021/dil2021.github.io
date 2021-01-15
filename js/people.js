$(document).ready(function(){
    // PC端人物信息展开收起效果开始
    var  moreBtns = document.getElementsByClassName("moreBtn");
    var  personInfoPs = document.getElementsByClassName("person_infoP");
    var  texts = $(".moreBtn i")
    var  Moreicons = $(".more .Moreicon")
    $.each(personInfoPs,(index,value)=>{
        value.xuhao=index;
        value.status=false;
    })
    $.each(moreBtns,(index,value)=>{
        value.xuhao=index; 
        value.onclick=function(){
            console.log(this.xuhao)
            if(personInfoPs[this.xuhao].status==false){
                $(".person_infoP").eq(this.xuhao).removeClass("hiddenList")
                personInfoPs[this.xuhao].style.overflow="auto"
                texts[this.xuhao].innerText="retract"
                Moreicons[this.xuhao].src="../img/icons/shouqi.svg"
                personInfoPs[this.xuhao].status=true;
                console.log(personInfoPs[this.xuhao].status)
            }else{
                $(".person_infoP").eq(this.xuhao).addClass("hiddenList")
                personInfoPs[this.xuhao].style.overflow="hidden"
                texts[this.xuhao].innerText="more"
                Moreicons[this.xuhao].src="../img/icons/zhankai.svg"
                personInfoPs[this.xuhao].status=false;
            }
        }
    })
    // PC端人物信息展开收起效果结束


    // 移动端人物信息展开收起效果开始
    var  moreBtns2 = document.getElementsByClassName("moreBtn2");
    var  WisePContents = document.getElementsByClassName("text_content");
    var  texts2 = $(".moreBtn2 i")
    var  Moreicons2 = $(".more2 .Moreicon")
    $.each( WisePContents,(index,value)=>{
        value.xuhao=index;
        value.status=true;
    })
    $.each(moreBtns2,(index,value)=>{
        value.xuhao=index; 
        value.onclick=function(){
            console.log(this.xuhao)
            if( WisePContents[this.xuhao].status==false){
                $(".text_content").eq(this.xuhao).css({"display":"none"})
                texts2[this.xuhao].innerText="more"
                Moreicons2[this.xuhao].src="../img/icons/zhankai.svg"
                WisePContents[this.xuhao].status=true;
                console.log(WisePContents[this.xuhao].status.status)
            }else{
                $(".text_content").eq(this.xuhao).css({"display":"block"})
                texts2[this.xuhao].innerText="retract"
                Moreicons2[this.xuhao].src="../img/icons/shouqi.svg"
                WisePContents[this.xuhao].status=false;
            }
        }
    })
    // 移动端人物信息展开收起效果结束







})

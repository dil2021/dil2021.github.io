$(function(){

  // 滚动事件函数

    // 节流变量
    var fangdou1=0;
    var fangdou2=0;
    var scrollTopReady=true;
    //判断滚动方向的方法
   function scroll(fn) {
    var beforeScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
            if(delta == 0) return false;
                fn(delta > 0 ? "down" : "up");
                 beforeScrollTop = afterScrollTop;
                }, false);
            }
//调用滚动方向：到达底部并且向下滚动的时候，加载更多评论
scroll(function(direction) {
        // 获取视口宽度
        var clientWidth =  document.body.clientWidth
        // console.log("当前视口宽度是：",clientWidth)
        if(direction=="down"){//向下滚动啦1111
            console.log("向下滚动啦1111",direction);
            var dScrollTop = $(document).scrollTop();//整个文档滚动条相对top位置
            // console.log("整个文档滚动条相对top位置：", dScrollTop)
            if(dScrollTop<150 && scrollTopReady==false){  
                return console.log("不做任何操作")
              }else if(dScrollTop>150 && clientWidth>576) {
                // 头部导航栏交互效果（向下滚动导航栏消失）
                if(fangdou2==0){
                    fangdou2=1
                    $(".header_wrap").eq(0).css({'top':'-60px',"opacity":"0"})
                    scrollTopReady=false;
                    // console.log("2222")
                    setTimeout(function () { 
                        fangdou2=0
                        console.log("节流结束1")
                        },1000) 
                } 
              }

            // 判断是否到底
           var scrollTop = $(window).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(window).height();
            //滚动到达底部
            if (scrollTop + windowHeight == scrollHeight) {  
               console.log("到底了！")
             }
        }else{//向上滚动啦2222
            console.log("向上滚动啦2222",direction);
             // 如果页面滚动条位置已经是0，就显示导航栏
             var dScrollTop = $(document).scrollTop();//整个文档滚动条相对top位置
             if(dScrollTop<150 && scrollTopReady==false){
                $(".header_wrap").eq(0).delay(200).css({'top':'0',"opacity":"1"})
                // console.log("33333")
                return scrollTopReady=true
             }else if(dScrollTop>150) {
                // console.log("整个文档滚动条相对top位置",dScrollTop)
                // 头部导航栏交互效果（向上滚导航栏出现）
                if(fangdou1==0){
                    fangdou1=1
                    $(".header_wrap").eq(0).delay(200).css({'top':'0',"opacity":"1"})
                    scrollTopReady=false;
                    // console.log("4444")
                    setTimeout(function () { 
                        fangdou1=0
                        console.log("节流结束2")
                        },1000)
                    }
             }
              

        }                 
     }); 


      // 侧边栏按钮换图片
    var btnStatus = 1;
    $("#chebian_btn").click(function () { 
        console.log("99999")
        if(btnStatus==1){
            $("#chebian_btn img").eq(0).fadeOut().siblings().fadeIn()
            $("#wise_navbar").css({"height":"240px"})
            btnStatus=2

        }else{
            $("#chebian_btn img").eq(1).fadeOut().siblings().fadeIn()
            $("#wise_navbar").css({"height":"0px"})
            btnStatus=1
        }

     })
    //  $("#wise_hover").on("click",function () {  
    //     $("#wise_hover").fadeOut()
    //  })
     




})
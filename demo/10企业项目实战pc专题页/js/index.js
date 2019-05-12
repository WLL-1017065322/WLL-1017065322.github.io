


//初始化Fullpage

$(document).ready(function () {
   
    $('#fullpage').fullpage({
        afterLoad:function(anchorLink,index){
            // console.log(index,anchorLink)
            //清除动画
            $('#fullpage>.section').removeClass('animation')
            //添加动画

            setTimeout(function(){
                $('#fullpage>.section').eq(index-1).addClass('animation');
            },10)
           
        }
    });


    //区域3的a标签高亮

    
    $('.sectionC .list a').mouseenter(function(){
       
           //clear其他
           $('.sectionC .list a').removeClass('active');
           $(this).addClass('active');

        var aIndex=$(this).attr('data-index');

        $('.sectionC .lessons li').eq(aIndex).stop().fadeIn().siblings().hide();

           
       })

    // 手动调用i一个a标签的mouseenter,让第一个默认选中
    $('.sectionC .list a').first().mouseenter();

    var num=7,
       fsWidth=960,
       itemWidth=760,
       initSpace=fsWidth/num;
       space=(fsWidth-itemWidth)/(num-1)
       

    $('.sectionD .fsbanner>div').each(function(index,element){
        $(element).css({
            left:initSpace*index
        })

    })

    $('.sectionD .fsbanner>div').mouseover(function(){
        var index=$(this).index();
        $('.sectionD .fsbanner>div').each(function(currentIndex,element){
            if(currentIndex<=index){
                $(element).css({
                    left:currentIndex*space
                })
            }else{
                $(element).css({
                    left:(currentIndex-1)*space+itemWidth
                })
            }

        })
    }).mouseout(function(){
        $('.sectionD .fsbanner>div').each(function(index,element){
            $(element).css({
                left:index * initSpace
            })
        })
    })
    
});


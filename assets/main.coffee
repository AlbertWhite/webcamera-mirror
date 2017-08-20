scanner = new Instascan.Scanner({ video: document.getElementById('preview-background') })
scanner_inner = new Instascan.Scanner({ video: document.getElementById('preview') })

scanner.addListener('scan', (content) ->
  console.log(content);
);

scanner_inner.addListener('scan', (content) ->
  console.log(content);
);


Instascan.Camera.getCameras().then( (cameras) ->
  if (cameras.length > 0)
    scanner.start(cameras[0])
  else
    console.error('No cameras found.')
).catch((e) ->
  console.error(e);
)


Instascan.Camera.getCameras().then( (cameras) ->
  if (cameras.length > 0)
    scanner_inner.start(cameras[0])
  else
    console.error('No cameras found.')
).catch((e) ->
  console.error(e);
)

$(document).ready ->

  setInterval(-> 
    $(".text").css("transform","translateX(3000px)")
  , 1000)

  textList = [
    "<div class='text'>如果问一周撸多少次合适，那么你已经撸多了。 —— 唐马儒</div>",
    "<div class='text'>因空见色,由色生情，传情入色，自色入空。 —— 红楼梦</div>",
    "<div class='text'>瞧瞧黑眼圈，肾虚了大哥？</div>",
    "<div class='text'>有没有想过贤者时间的内疚和空虚</div>",
    "<div class='text'>看着自己样子还想打么</div>",
    "<div class='text'>一个人高潮，孤独的人是可耻的</div>"
  ]

  index = 1
  setInterval(->
    i = index%6
    text = textList[i]
    index++

    $(".text").remove()
    $("body").append(text)
    text.css("top", "5%")
    text.css("left", "-800px")
    $.each($(".text"), (index, element) ->
      $(element).css("top", "#{index*50}px")
    )


  , 10000)


  